<html>
<head>
<title>IsValueInScope</title>
</head>

<body>

<p><font size="4" face="Arial"><strong>Функция IsValueInScope</strong></font></p>

<p><font face="Arial">Возвращает значение True, если значение vValue<em> </em>
    принадлежит области sAllowedValues.</font></p>

<p>&nbsp;</p>

<p><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>IsValueInScope (</strong><em>vValue, sAllowedValues, 
    sScopeType, sDataType, </em>[<em>sErrArm</em>]<em>, 
</em>[<em>sErrEng</em>]<strong>)</strong></font></p>

<p><font face="Arial">Синтаксис функции <strong>IsValueInScope </strong>состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><em><font face="Arial">vValue</font></em></td>
    <td width="71%"><font face="Arial">обязательное выражение типа вариант, определяющее искомое 
        значение, принадлежность которого проверяется.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>sAllowedValues</em></font></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, оределяющее 
        интервальное значение для vValue. </font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>sScopeType</em></font></td>
    <td width="71%"><font face="Arial">обаязательное выражение типа интервальной 
        разрешимости для vValue. При значениии 1 значение разрешимое, при 
        значении 2 не разрешимое.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>sDataType</em></font></td>
    <td width="71%"><font face="Arial">обязательное строковое выражение, определяющее <a href="../types.html">
        тип 
    данных</a> для значения vValue. </font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>sErrArm</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее 
        возвращаемое сообщение об не разрешимости значения на армянском языке. </font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>sErrEng</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое выражение, определяющее 
        возвращаемое сообщение об не разрешимости значения на иностранном языке. </font></td>
    </tr>
  </table>

    <p>
        &nbsp;</p>
    <p>
        <font face="Arial"><b>Примечание</b></font></p>
    <p>
        <font face="Arial"><a href="../../functions.html">См. также</a></font></p>

</body>
</html>
