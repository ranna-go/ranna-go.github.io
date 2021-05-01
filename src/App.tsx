import Editor from '@monaco-editor/react';
import {
  APIError,
  ExecutionResponse,
  Snippet,
  SpecMap,
  StringMap,
} from '@ranna-go/ranna-ts';
import { SystemInfo } from '@ranna-go/ranna-ts/dist/models';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import ResultViewer from './components/result-viewer/ResultViewer';
import Snackbar from './components/snackbar/Snackbar';
import { client, snippets } from './services/client';

const langMap: StringMap = {
  'python3': 'python',
  'openjdk-11': 'java',
};

function App() {
  const [specs, setSpecs] = useState({} as SpecMap);
  const [selectedLang, setSelectedLang] = useState('');
  const [code, setCode] = useState('');
  const [execRes, setExecRes] = useState({} as ExecutionResponse);
  const [info, setInfo] = useState({} as SystemInfo);
  const [isExecuting, setIsExecuting] = useState(false);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState<JSX.Element>();
  const [snackbarColor, setSnackbarColor] = useState<string | undefined>(
    undefined
  );

  const snippetIdent = useRef<string | null>();
  const originalSnippetCode = useRef<string>();

  useEffect(() => {
    snippetIdent.current = new URLSearchParams(window.location.search).get('s');

    client
      .spec()
      .then((res) => {
        setSpecs(res);
        setSelectedLang(Object.keys(res)[0]);
      })
      .catch();

    if (snippetIdent.current) {
      snippets
        .get(snippetIdent.current)
        .then((snippet) => {
          setSelectedLang(snippet.language);
          setCode(snippet.code);
          originalSnippetCode.current = snippet.code;
        })
        .catch();
    }

    client
      .info()
      .then((res) => setInfo(res))
      .catch();
  }, []);

  async function run() {
    if (!isExecuting && code && selectedLang) {
      setIsExecuting(true);
      setExecRes({} as ExecutionResponse);
      try {
        const res = await client.exec({ language: selectedLang, code: code });
        setExecRes(res);
      } catch (err) {
        onError(err);
      }
      setIsExecuting(false);
    }
  }

  async function share() {
    if (code && selectedLang) {
      try {
        if (
          !snippetIdent.current ||
          code.trim() !== originalSnippetCode.current?.trim()
        ) {
          const snippet = await snippets.create({
            code: code,
            language: selectedLang,
          } as Snippet);
          snippetIdent.current = snippet.ident;
          window.history.pushState('', '', '/?s=' + snippetIdent.current);
        }

        setSnackbarColor(undefined);
        setSnackbarContent(
          <div>
            <span>You can share the snippet using this link.</span>
            <br />
            <input
              className="share-input"
              readOnly
              value={window.location.origin + '?s=' + snippetIdent.current}
              onFocus={(e) => e.target.select()}
            />
          </div>
        );
        setShowSnackbar(true);
      } catch (err) {
        onError(err);
      }
    }
  }

  function onError(err: Error) {
    console.log(err);
    if (
      (err instanceof APIError && err.code === 429) ||
      err.message === 'Failed to fetch'
    ) {
      err.message = 'You need to wait until you can perform this action again.';
    }
    setSnackbarColor('#f44336');
    setSnackbarContent(<span>{err.message}</span>);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 4000);
  }

  return (
    <div className="container">
      <Snackbar
        show={showSnackbar}
        color={snackbarColor}
        onHide={() => setShowSnackbar(false)}
      >
        {snackbarContent}
      </Snackbar>
      <Header
        info={info}
        languages={Object.keys(specs) ?? []}
        selectedLanguage={selectedLang}
        isExecuting={isExecuting}
        disabled={!code}
        onLanguageSelect={(v) => setSelectedLang(v)}
        onExecute={() => run()}
        onShare={() => share()}
      />
      <Editor
        height="calc(100vh - 105px)"
        language={mapLang(selectedLang)}
        theme="vs-dark"
        value={code}
        onChange={(v) => setCode(v!)}
        wrapperClassName="code-editor"
      ></Editor>
      <ResultViewer res={execRes} />
    </div>
  );
}

function mapLang(lang: string): string {
  return langMap[lang] ?? lang;
}

export default App;