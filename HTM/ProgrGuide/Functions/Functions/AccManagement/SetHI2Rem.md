<html>
<head>
<title>SetHI2Rem</title>
<style type="text/css">
.style1 {
	font-family: "Arial";
}
</style>
</head>

<body>

<p><strong><font size="4" face="Arial">Метод SetHI2Rem</font></strong></p>

<p><font face="Arial">Устанавливает начальный остаток для объекта 
учета и аккумулирующего объекта в HIREST2. В системе начальный остаток 
фиксируется на дату Param(&quot;StartDate&quot;), а текущий остаток на дату Param(&quot;EndDate&quot;). 
Если код валюты равен &#39;000&#39;, то остаток суммы в валюте полагается равным 
драмовой сумме. При вызове процедуры SetHI2Rem возможны следующие случаи:<br>
- Если в <a href="../../../Database/Hirest2.html">базе хранения остатков</a> нет 
остатка для объекта учета, то добавляются две строчки хранения остатков: одна 
для хранения начального остатка, а другая для текущего остатка. <br>
- А если уже имеются остатки и оборот для объекта, то процедура установит новые 
начальные остатки, а текущий остаток скорректирует на величину имеющегося 
оборота. </font></p>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Синтаксис</b></font></p>

<p><font face="Arial"><strong>Util.SetHI2Rem</strong> (<em>TypeAcc, 
Object, GLObject, Summa, </em>[<em>CurCode</em>],<em>
</em>[<em>CurSumma</em>])</font></p>

<p><font face="Arial"><br>
Синтаксис метода <strong>SetHI2Rem</strong> состоит из следующих частей:</font></p>

<table border="1" cellPadding="5" cols="2" frame="below" rules="rows">
<TBODY>
  <tr vAlign="top">
    <td class="label" width="29%"><font face="Arial"><b>Параметр</b></font></td>
    <td class="label" width="71%"><font face="Arial"><strong>Описание</strong></font></td>
  </tr>
  <tr vAlign="top">
    <td width="29%"><font face="Arial"><em>TypeAcc</em></font></td>
    <td width="71%"><font face="Arial">строковое выражение, 
	определяющее <a href="../../../Defs/Accounting.html">код уета</a> из его 
	описания.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Object</em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее код либо ISN объекта учета, для которого устанавливаются 
	остатки.</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>GLObject </em></font></td>
    <td width="71%"><font face="Arial">выражение типа Variant, 
	определяющее код либо ISN
      </font><font face="Arial">
      аккумулирующего объекта</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>Summa</em></font></td>
    <td width="71%"><span class="style1">ч</span><font face="Arial">исленное выражение типа 
	Currency, определяющее сумму остатка объекта в основной денежной единице 
	системы</font></td>
  </tr>
  <tr>
    <td width="29%"><font face="Arial"><em>CurCode</em></font></td>
    <td width="71%"><font face="Arial">необязательное строковое 
	выражение, определяющее код валюты остатка. Если параметр опущен, то 
	принимается значение &#39;000&#39; - код национальной денежной единицы.</font></td>
  </tr>
</TBODY>
  <tr>
    <td width="29%"><font face="Arial"><em>CurSumma</em></font></td>
    <td width="71%"><font face="Arial">необязательное численное 
	выражение типа Currency, определяющее сумму остатка объекта в иностранной 
	валюте. В случае национальной денежной единицы они равны друг другу.</font></td>
  </tr>
</table>

<p class="label">&nbsp;</p>

<p class="label"><font face="Arial"><b>Примечание</b></font></p>

<p class="label"><a href="SetRem.html"><font face="Arial">См. также</font></a></p>

</body>
</html>
