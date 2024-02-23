import { CodeBlock, dracula } from "react-code-blocks";

const CodePreview = ({ code }) => {
    return (
        <CodeBlock text={code}
            language="javascript"
            showLineNumbers={false}
            theme={dracula}
        />
    )
}

export default CodePreview;