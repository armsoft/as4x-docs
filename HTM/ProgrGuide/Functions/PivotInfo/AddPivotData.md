<html>
<head>
<title>AddPivotData</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial;
        }
        .style3
        {
            height: 30px;
        }
    </style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод AddPivotData<br>
<br>
</font></strong><font face="Arial"><a href="../PivotInfo.html">См. также</a>&nbsp;
Пример</a>&nbsp; <a href="../PivotInfo.html">
Применяется к</a></font></p>

<p><font face="Arial">Добавляет транспонированные данные в Excel.</font></p>

<p>&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>call</strong> <em>object</em>.<strong>AddPivotData(</strong><em>columnName, </em>
    [<em>caption</em>], [<em>function</em>])</font></p>

<p><font face="Arial">Синтаксис метода <strong>AddPivotRow</strong>
состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%"><em><font face="Arial">object</font></em></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее переменную, ссылающуюся на экземпляр объекта типа PivotInfo.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>columnName</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее идентификатор колонки, значения которого нужно транспонировать.</font></td>
  </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>caption</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее наименование транспонированного значения в Excel.</font></td>
    </tr>
    <tr>
    <td width="29%"><font face="Arial"><em>function</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, определяющее функцию, 
        применяаемое на транспонированные значения. По умолчанию принимает значение 
        -4157.</font></td>
    </tr>
</TBODY>
  </table>

    <p>
        &nbsp;</p>
    <p>
        <span class="style1"><strong>Установки для параметра <em>f</em></strong></span><font face="Arial"><strong><em>unction</em></strong></font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Значение </b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr>
    <td width="29%">-4106</td>
    <td width="71%"><font face="Arial">Вычисляет среднее значение транспонированных 
        данных.</font></td>
  </tr>
  <tr>
    <td width="29%" class="style3">-4112</td>
    <td width="71%" class="style3"><font face="Arial">Подсчитывает количество числовых 
        ячеек транспонированных данных.</font></td>
  </tr>
    <tr>
    <td width="29%">-4113</td>
    <td width="71%"><font face="Arial">Подсчитывает количество непустых ячеек 
        транспонированных данных.</font></td>
    </tr>
    <tr>
    <td width="29%" class="style3">-4136</td>
    <td width="71%" class="style3"><font face="Arial">Находит максимальное значение 
        среди транспонированных данных.</font></td>
    </tr>
    <tr>
    <td width="29%" class="style3">-4139</td>
    <td width="71%" class="style3"><font face="Arial">Находит минимальное значение среди 
        транспонированных данных.</font></td>
    </tr>
    <tr>
    <td width="29%">-4149</td>
    <td width="71%"><font face="Arial">Перемножает значения, удовлетворяющих условию.</font></td>
    </tr>
    <tr>
    <td width="29%">-4155</td>
    <td width="71%"><font face="Arial">Оценивает стандартное отклонение по выборке из 
        транспонированных данных.</font></td>
    </tr>
    <tr>
    <td width="29%" class="style3">-4156</td>
    <td width="71%" ><font face="Arial">Вычисляет стандартное отклонение по генеральной 
        совокупности из транспонированных данных.</font></td>
    </tr>
    <tr>
    <td width="29%">-4157</td>
    <td width="71%"><font face="Arial">Суммирует числа транспонированных данных, 
        удовлетворяющих условию.</font></td>
    </tr>
    <tr>
    <td width="29%" class="style3">-4164</td>
    <td width="71%" class="style3"><font face="Arial">Оценивает дисперсию по выборке из 
        транспонированных данных.</font></td>
    </tr>
    <tr>
    <td width="29%">-4165</td>
    <td width="71%"><font face="Arial">Вычисляет дисперсию по генеральной совокупности 
        из транспонированных данных.</font></td>
    </tr>
    <tr>
    <td width="29%">...</td>
    <td width="71%">&nbsp;</td>
    </tr>
</TBODY>
  </table>

</body>
</html>
