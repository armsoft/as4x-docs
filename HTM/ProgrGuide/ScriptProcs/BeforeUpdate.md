<html>
<head>
<title>Системное событие&nbsp; BeforeUpdate</title>
</head>

<body>

    <p>
        <font size="4" face="Arial">
            <strong>
                Событие BeforeUpdate<br>
                <br>
            </strong>
        </font><font face="Arial"><a href="../ScriptProcs/DataEvents.html">См.также</a>&nbsp; <u>Пример</u>&nbsp; <a href="../ScriptProcs/DataEvents.html">Применяется к</a></font>
    </p>

    <p class="label">
        <font face="Arial">
            Срабатывает при добавлении или редактировании конкретной строки перед событием <a href="../ScriptProcs/SQL.html">SQL.</a> При обновлении или открытии источника данных данное событие не вызывается.
        </font>
    </p>

    <p class="label">&nbsp;</p>

    <p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

    <p>
        <font face="Arial">
            Sub <strong>BeforeUpdate</strong> (Byval <em>lISN</em> as Long)<br>
            <em>&nbsp;&nbsp; statements</em><br>
            End Sub
        </font>
    </p>

    <p>
        <font face="Arial">
            Синтаксис события <strong>BeforeUpdate</strong>
            состоит из следующих частей:
        </font>
    </p>

    <table border="1" cellpadding="5" cols="2" frame="below" rules="rows">
        <tbody>
            <tr valign="top">
                <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
                <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
            </tr>
            <tr>
                <td width="29%"><em><font face="Arial">lISN</font></em></td>
                <td width="71%">
                    <font face="Arial">
                        численное виражение типа Long, принимающее значение ISN той строки, которую либо добавляем, либо редактируем
                    </font>
                </td>
            </tr>
    </table>
</body>
</html>
