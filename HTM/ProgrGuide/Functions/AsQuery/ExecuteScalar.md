<html>
<head>
    <title>AsQuery\ExecuteScalar</title>
    <link rel="stylesheet" href="../../../common.css" />
</head>
<body>
    <h2>Метод ExecuteScalar</h2>

    <p>
        <!--<a href="../AsQuery.html">См. также</a>&nbsp;-->
        <a href="../../Examples/E_AsQuery.html">Пример</a>
        <a href="../AsQuery.html">Применяется к</a>
    </p>

    <p>
        Метод ExecuteScalar выполняет SQL-запрос и возвращает первый или единственный элемент из результата выполнения. Данный метод обычно применяется тогда,
        когда при выполнении запроса используются такие функции как Min, Max, Sum, Count и т.д., которые предназначены для вычисления единственного значения.
         Если запрос возвращает больше строк, то результатом выполнения будет значение первого столбца первой строки, а если же запрос ничего не возвращает, то результатом будет значение <em>Empty</em>.
    </p>

    <h4>Синтаксис</h4>
    <p>
        <em>vVariable</em> = <em>object</em>.<strong>ExecuteScalar</strong>([<em>RSType</em>],
        [<em>RSLockType</em>],
        [<em>RSOption</em>],
        [<em>QueryTimeout</em>])
    </p>

    <p>Синтаксис метода <strong>ExecuteScalar</strong> состоит из следующих частей:</p>

    <table>
        <thead>
            <tr>
                <th>Параметр</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="param">vVariable</td>
                <td>переменная типа Variant.</td>
            </tr>
            <tr>
                <td class="param">object</td>
                <td>строковое выражение, являющееся ссылкой на экземпляр объекта AsQuery.</td>
            </tr>
            <tr>
                <td class="param">RSType</td>
                <td>
                    необязательное числовое
                    выражение, определяющее тип курсора возвращаемого результата. По умолчанию принимает значение <a href="../../Constants/const_opencursor_cursortype.html">ASOpenForwardOnly</a>.
                </td>
            </tr>
            <tr>
                <td class="param">RSLockType</td>
                <td>
                    необязательное числовое
                    выражение, определяющее тип блокировки данных, используемых при выполнении
                    запроса. По умолчанию принимает значение <a href="../../Constants/const_opencursor_locktype.html">ASConcurReadOnly</a>.
                </td>
            </tr>
            <tr>
                <td class="param">RSOption</td>
                <td>
                    необязательное числовое
                    выражение, определяющее дополнительные параметры выполнения запроса. По
                    умолчанию принимает значение <a href="../../Constants/const_executequery_options.html">ASExecDirect</a>.
                </td>
            </tr>
            <tr>
                <td class="param">QueryTimeout</td>
                <td>
                    необязательное числовое
                    выражение, определяющее максимальное время выполнения запроса, по истечению
                    которого выдается ошибка. Измеряется в секундах. По умолчанию принимает
                    значение 30 секунд.
                </td>
            </tr>
        </tbody>
    </table>

    <h4>Примечание</h4>
    <p>
       Во время вызова открывается и закрывается rdoResultset, и это надо учитывать при использовании.
    </p>
</body>
</html>
