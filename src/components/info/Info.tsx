import './Info.scss';
import { ReactComponent as LogoWide } from '../../assets/logo-wide.svg';
import { SystemInfo } from '@ranna-go/ranna-ts/dist/models';

interface InfoProperties {
  info: SystemInfo;
}

export default function Info(props: InfoProperties) {
  return (
    <div className="info-container">
      <LogoWide className="logo" />
      <table className="table mt">
        <tbody>
          <tr>
            <td>Ranna Endpoint</td>
            <td>https://public.ranna.zekro.de</td>
          </tr>
          <tr>
            <td>Snippets Endpoint</td>
            <td>https://snippets.ranna.zekro.de</td>
          </tr>
          <tr>
            <td>Version</td>
            <td>{props.info.version}</td>
          </tr>
          <tr>
            <td>Build Date</td>
            <td>{props.info.builddate}</td>
          </tr>
          <tr>
            <td>Go Version</td>
            <td>{props.info.go_version}</td>
          </tr>
          <tr>
            <td>Sandbox Provider</td>
            <td>
              {props.info.sandbox?.type} ({props.info.sandbox?.version})
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mt">© 2021 zekro Development</p>
      <a href="https://github.com/ranna-go/ranna">GitHub</a> |{' '}
      <a href="https://zekro.de/imprint">Imprint</a>
    </div>
  );
}