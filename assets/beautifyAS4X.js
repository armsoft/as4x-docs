class SepPair {
    constructor(index1, char1) {
        this.index = index1;
        this.char = char1;
    }
}
function beautifyAS4X(code) {
    let script = code.innerHTML;
    let resultHTML = "";
    let prev = null;
    let next = findFirstSeparator(script);
    while (next != null) {
        switch (next.char) {
            case "{":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += "<span class='nt'>" + s0 + "</span>" + next.char;
                    let s02 = script.substring(next.index + 1);
                    script = s02;
                }
                break;
            case "}":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += s0 + next.char;
                    let s02 = script.substring(next.index + 1);
                    script = s02;
                }
                break;
            case ";":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += parseAssignment(s0) + next.char;
                    let s02 = script.substring(next.index + 1);
                    script = s02;
                }
                break;
            case "'":
                {
                    let s0 = script.substring(0, next.index);
                    resultHTML += s0 + "<span class='c'>" + next.char + "</span>";
                    script = script.substring(next.index + 1);
                    let iEndLine = script.indexOf("\n");
                    let s1 = script.substring(0, iEndLine + 1);
                    resultHTML += "<span class='c'>" + s1 + "</span>";
                    let s02 = script.substring(iEndLine + 1);
                    script = s02;
                }
                break;
            // case "\n":
            //     {
            //         let s0 = script.substring(0, next.index);
            //         resultHTML += s0 + next.char;
            //         let s02 = script.substring(next.index + 1);
            //         script = s02;
            //     }
            //     break;
            default:
                throw new Error("unprocessed char: " + next.char);
            //break;
        }
        prev = next;
        next = findFirstSeparator(script);
    }
    resultHTML += script;
    code.innerHTML = resultHTML;
}
function findFirstSeparator(script) {
    let iSemicolon = new SepPair(script.indexOf(";"), ";");
    let iEndBrace = new SepPair(script.indexOf("}"), "}");
    let iOpenBrace = new SepPair(script.indexOf("{"), "{");
    //let iEndLine = new SepPair(script.indexOf("\n"), "\n");
    let iComment = new SepPair(script.indexOf("'"), "'");
    let arr = [];
    if (iSemicolon.index >= 0) {
        arr.push(iSemicolon);
    }
    if (iEndBrace.index >= 0) {
        arr.push(iEndBrace);
    }
    if (iOpenBrace.index >= 0) {
        arr.push(iOpenBrace);
    }
    // if (iEndLine.index >= 0) {
    //     arr.push(iEndLine);
    // }
    if (iComment.index >= 0) {
        arr.push(iComment);
    }
    if (arr.length == 0) {
        return null;
    }
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].index < result.index) {
            result = arr[i];
        }
    }
    return result;
}
function parseAssignment(script) {
    const iAssign = script.indexOf("=");
    if (iAssign >= 0) {
        const key = script.substring(0, iAssign);
        const value = script.substring(iAssign + 1);
        const keyHtml = "<span class='nt'>" + key + "</span><span class='p'>=</span>";
        let valueHtml;
        const firstQuote = value.indexOf("\"");
        const lastQuote = value.lastIndexOf("\"");
        if (0 <= firstQuote && firstQuote < lastQuote) {
            const s1 = value.substring(0, firstQuote);
            const str = value.substring(firstQuote, lastQuote + 1);
            const s2 = value.substring(lastQuote + 1);
            return "<span class='nt'>" + key + "</span>" + "<span class='p'>=</span>" + s1 + "<span class='s'>" + str + "</span>" + s2;
        }
        else if (!isNaN(+value)) {
            const r = /[+-]?([0-9]*[.])?[0-9]+/;
            const numeric = r.exec(value)[0];
            const i = value.indexOf(numeric);
            const s1 = value.substring(0, i);
            const s2 = value.substring(i + numeric.length);
            if (numeric.indexOf(".") < 0) {
                valueHtml = s1 + "<span class='mi'>" + numeric + "</span>" + s2;
            }
            else {
                valueHtml = s1 + "<span class='mf'>" + numeric + "</span>" + s2;
            }
        }
        else {
            valueHtml = value;
        }
        return keyHtml + valueHtml;
    }
    else {
        return script;
    }
}
function highlightAllAS4X() {
    const codes = document.querySelectorAll("code.language-as4x");
    for (let i = 0; i < codes.length; i++) {
        const codeTag = codes[i];
        const preTag = codeTag.parentElement;
        if (preTag && preTag.tagName == "PRE") {
            codeTag.classList.remove("language-as4x");
            preTag.classList.add("highlight");
            const div1 = document.createElement("div");
            div1.classList.add("language-as4x");
            div1.classList.add("highlighter-rouge");
            const div2 = document.createElement("div");
            div2.classList.add("highlight");
            div1.appendChild(div2);
            preTag.parentElement.insertBefore(div1, preTag);
            div2.appendChild(preTag);
            beautifyAS4X(codeTag);
        }
    }
}
highlightAllAS4X();
