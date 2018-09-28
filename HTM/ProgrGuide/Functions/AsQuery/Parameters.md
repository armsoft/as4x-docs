<html>
<head>
    <title>AsQuery\Parameters</title>
    <link rel="stylesheet" href="../../../common.css" />
</head>
<body>
    <h2>Свойство Parameters</h2>

    <p>
        <!--<a href="../AsQuery.html">См. также</a>&nbsp;-->
        <a href="../../Examples/E_AsQuery.html">Пример</a>&nbsp;
        <a href="../AsQuery.html">Применяется к</a>
    </p>

    <p>Возвращает или устанавливает значение параметра для SQL-запроса.</p>
    <p>Свойство для чтения и записи.</p>

    <h4>Синтаксис</h4>
    <p>
        <em>object</em><strong>.Parameters</strong>(<em>sIndex</em>) [= <em>vValue</em>]
    </p>

    <p>Синтаксис свойства <strong>Parameters</strong> состоит из следующих частей:</p>

    <table>
        <thead>
            <tr>
                <th>Параметр</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="param">object</td>
                <td>строковое выражение, являющееся ссылкой на экземпляр объекта AsQuery.</td>
            </tr>
            <tr>
                <td class="param">sIndex</td>
                <td>строковое выражение, указывающее индекс параметра SQL запроса.</td>
            </tr>
            <tr>
                <td class="param">vValue</td>
                <td>выражение типа Variant, определяющее значение параметра.</td>
            </tr>
        </tbody>
    </table>

    <h4>Примечание</h4>
    <p>
        Параметры подставляются в запрос следующим образом: <em><u>?PARAMETERNAME</u></em>. <br /> 
        <br /> 
        При подставлении параметра надо учитывать тип значения. <br />  
        Следующая таблица показывает преоброзавания параметров исходя из типов.
    </p>

    <table>
        <thead>
            <tr>
                <th class="member">Тип</th>
                <th>Пример значения</th>
                <th>Преоброзавание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>vbString</td>
                <td>Ender's Game</td>
                <td>'Ender''s Game'</td>
            </tr>
            <tr>
                <td>vbDate</td>
                <td>26/01/2018</td>
                <td>'20180126'</td>
            </tr>
            <tr>
                <td>vbBoolean</td>
                <td>True<br />False</td>
                <td>1<br />0</td>
            </tr>
            <tr>
                <td>
                    vbByte, vbCurrency, vbDecimal, vbDouble, vbInteger, vbLong, vbSingle
                </td>
                <td>278<br />278.35</td>
                <td>278<br />278.35</td>
            </tr>
            <tr>
                <td>vbNull</td>
                <td></td>
                <td>null</td>
            </tr>
            <tr>
                <td colspan="3">Использование других типов приводит к ошибке.</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
