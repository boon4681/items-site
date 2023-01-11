import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import Theme from './Code.style';

export default function Code({ code, language, theme }: { code: string, language: string, theme?: string }) {
  return (
    <div className={`text-sm w-full max-w-full code ${theme ? 'code-' + theme : ''}`}>
      <SyntaxHighlighter language={language} style={theme == 'dark' || theme == undefined ? Theme.dark : Theme.light}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}