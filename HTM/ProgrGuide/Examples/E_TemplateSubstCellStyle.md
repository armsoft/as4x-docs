<html>
<head>
<title>E_DataSourceIndicator</title>
    <style type="text/css">
        .style1
        {
            font-weight: normal;
        }
        </style>
</head>

<body>

<p><strong><font size="3" face="Arial">Пример</font><font
face="Arial"> работы свойств <span class="style1">
    <a href="../Functions/TemplateSubstCellStyle/BackColor.html">
    BackColor</a></span>, <span class="style1">
    <a href="../Functions/TemplateSubstCellStyle/Bold.html">
    Bold</a></span>, <span class="style1">
    <a href="../Functions/TemplateSubstCellStyle/Color.html">
    Color</a></span>, <span class="style1">
    <a href="../Functions/TemplateSubstCellStyle/Italic.html">
    Italic</a></span> и <span class="style1">
    <a href="../Functions/TemplateSubstCellStyle/Underline.html">
    Underline</a></span> для 
    объекта типа <span class="style1"> <a href="../Functions/TemplateSubstCellStyle.html">TemplateSubstCellStyle</a></span>.</font></strong></p>

    <font face="Arial">

    <p> 
    <br />
    Dim tempSub As TemplateSubstitution<br />
    Dim i As Integer<br />
    Dim sSql As String
    <br />
    Dim rs As rdoResultset
    <br />
    Dim style As TemplateSubstCellStyle</font></p>
     <p><font face="Arial">sSql = "select d.fISN, d.fNAME" & vbCrLf _ <br />
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           & "from DOCS d" & vbCrLf 
     <br /> 
     Set rs = Util.ExecuteQuery(sSql, True, ASOpenForwardOnly) </font></p>
    <p><font face="Arial">Set tempSub = New TemplateSubstitution <br />
                                                                                             
	tempSub.AddGrid "T1"<br />
	With tempSub.Grid("T1")<br />
		&nbsp;&nbsp;&nbsp;
		.AddColumn "1", &quot;ISN документа&quot;, &quot;NP(10,0)&quot;<br />
        &nbsp;&nbsp;&nbsp;
        .AddColumn "2", &quot;Наименование документа&quot;, &quot;NP(10,0)&quot;<br />
		&nbsp;&nbsp;&nbsp;
		.UseStyles = True <br />
        <br />
		&nbsp;&nbsp;&nbsp;
		Set style = New TemplateSubstCellStyle <br />
		&nbsp;&nbsp;&nbsp;
		With style <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			.<strong>BackColor</strong> = "#00FF00" <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			.<strong>Color</strong> = "#FF0000" <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			.<strong>Bold</strong> = 1 <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			.<strong>Italic</strong> = 0 <br />
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             .<strong>Underline</strong> = 1 <br />
		&nbsp;&nbsp;&nbsp;
		End With <br />
        <br />
		&nbsp;&nbsp;&nbsp; i = 0 <br />
		&nbsp;&nbsp;&nbsp;
		While Not rs.EOF <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			.AddRow <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			.Value(i, "1") = CStr(rs("fISN")) <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			.Value(i, "2") = CStr(rs("fNAME")) <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            .SetRowStyle CLng(i), style <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			rs.MoveNext <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i+= 1 <br />
		&nbsp;&nbsp;&nbsp;
		Wend <br />
	End With </font></p><br />

    <p><font face="Arial">
        <br>
        <br>
</font></p>
</body>
</html>
