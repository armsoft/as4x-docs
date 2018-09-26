<html>
<head>
    <title>CreateTreeElement</title>
    <link rel="stylesheet" href="../../../../common.css" />
</head>

<body>
    <h2>Функция CreateTreeElement</h2>
    <p><a href="../../AsTreeElement.html"><strong>свойства&nbsp;&nbsp;методы</strong></a></p>

    <p>Создает новый экземпляр элемента дерева для дальнейшего заполнения и сохранения.</p>

    <h4>Синтаксис</h4>

    <p>
        <strong>Set</strong> <em>sNewTreeEl</em> = <strong>CreateTreeElement</strong> (<em>TreeId</em>)
    </p>

    <p>Синтаксис функции <strong>CreateTreeElement </strong>состоит из следующих частей:</p>

    <table>
        <thead>
            <tr>
                <th>Параметр</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="param">sNewTreeEl</td>
                <td>переменная, ссылающаяся на новый экземпляр элемента дерева</td>
            </tr>
            <tr>
                <td class="param">TreeId</td>
                <td>строковое выражение, определяющее идентификатор дерева, для которого создается элемент</td>
            </tr>
        </tbody>
    </table>

    <h4>Примечание</h4>

    <p><a href="../../../constructors.html">См. также</a></p>

    <h4>Пример функции CreateTreeElement</h4>

    <p>
        В примере вызывается функция CreateTreeElement, 
xTreeEl ссылается на вновь созданный экземпляр элемента дерева со всеми его 
свойствами и методами. 
    </p>

    <pre><code>Set xTreeEl = <strong>CreateTreeElement</strong>(&quot;NbalAcc&quot;)
xTreeEl.<a href="../../AsTreeElement/Com.html">Com</a> = Doc(&quot;Name&quot;)
xTreeEl.<a href="../../AsTreeElement/ECom.html">Ecom</a> = Doc(&quot;EName&quot;)
xTreeEl.<a href="../../AsTreeElement/Key.html">Key</a> = Doc(&quot;CODE&quot;)
xTreeEl.<a href="../../AsTreeElement/Parent.html">Parent</a> = Doc(&quot;CODEBAL&quot;)
Doc.StoreInTree xTreeEl</code></pre>
</body>
</html>
