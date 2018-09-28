<html>
<head>
    <title>CutParentLink</title>
    <link rel="stylesheet" href="../../../../common.css" />
</head>
<body>

    <h2>Метод CutParentLink</h2>

    <p>Для указанного документа разрывает связь с родителем.</p>

    <h4>Синтаксис</h4>

    <p><strong>CutParentLink</strong> (<em>nISN</em>, [<em>nParentISN</em>])</p>

    <p>Синтаксис метода <strong>CutParentLink</strong> состоит из следующих частей:</p>

    <table>
        <thead>
            <tr>
                <th>Параметр</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="param">nISN</td>
                <td>численное выражение типа Long, 
	определяющее ISN документа, для которого разрывается связь с родителем.</td>
            </tr>
            <tr>
                <td class="param">nParentISN</td>
                <td>необязательное численное 
	выражение типа Long, определяющее ISN родительского документа, с которым 
	разрывается связь. Если параметр опущен, то разрываются связи со всеми 
	существующими родителями.</td>
            </tr>
        </tbody>
    </table>



    <h4>Примечание</h4>

    <p>
        Из таблицы <a href="../../../Database/DocP.html">DOCP</a> удаляется строка, соответствующая данному документу.
    </p>
    <p><a href="MakeParentLink.html">См. также</a></p>
</body>
</html>
