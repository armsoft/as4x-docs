<html>
<head>
    <title>CreationDate</title>
    <link rel="stylesheet" href="../../../../common.css" />
</head>
<body>

    <h2>Функция CreationDate</h2>

    <p>Возвращает дату создания документа.</p>

    <h4>Синтаксис</h4>

    <p>
        <em>dDate</em> = <strong>Util.CreationDate</strong>(<em>nISN</em>, [<em>nSUID</em>], [<em>notRiseErrWhenNoRow</em>])
    </p>
    <p>Синтаксис функции <strong>CreationDate</strong> состоит из следующих частей:</p>

    <table>
        <thead>
            <tr>
                <th>Параметр</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="param">dDate</td>
                <td>переменная типа дата</td>
            </tr>
            <tr>
                <td class="param">nISN</td>
                <td>численное выражение типа Long, определяющее ISN документа </td>
            </tr>
            <tr>
                <td class="param">nSUID</td>
                <td>переменная типа Long, в которой возвращается идентификатор пользователя создавшего документ</td>
            </tr>
            <tr>
                <td class="param">notRiseErrWhenNoRow</td>
                <td>
                    необязательное логическое выражение, определяющее признак 
                    генерации ошибки при не нахождении искомого документа.
                    По умолчанию принимает значение False, при котором генерируется сообщение об ошибке. 
                    При значении True, вместо ошибки возвращается значение 01/01/1900, а nSUID принимает значение -1.
                </td>
            </tr>
        </tbody>
    </table>
    
    <h4>Примечание</h4>
    <p><a href="../../../functions.html">См. также</a></p>
</body>
</html>
