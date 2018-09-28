<html>
<head>
    <title>AsQuery\ExecuteReader</title>
    <link rel="stylesheet" href="../../../common.css" />
</head>
<body>
    <h2>Метод ExecuteReader</h2>

    <p>
        <!--<a href="../AsQuery.html">См. также</a>&nbsp;-->
        <a href="../../Examples/E_AsQuery.html">Пример</a>&nbsp;
        <a href="../AsQuery.html">Применяется к</a>
    </p>

    <p>Выполняет SQL-запрос и возвращает результат выполнения. Количество возвращаемых значений может быть более одного.</p>

    <h4>Синтаксис</h4>
    <p>
        <strong>Set</strong> <em>rs</em> = <em>object</em>.<strong>ExecuteReader</strong>([<em>RSType</em>],
        [<em>RSLockType</em>],
        [<em>RSOption</em>],
        [<em>QueryTimeout</em>])
    </p>

    <p>Синтаксис метода <strong>ExecuteReader</strong> состоит из следующих частей:</p>

    <table>
        <thead>
            <tr>
                <th>Параметр</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="param">rs</td>
                <td>переменная типа rdoResultset.</td>
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
</body>
</html>
