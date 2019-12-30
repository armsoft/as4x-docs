---
layout: page
title: "Օրինակ/DataSourceIndicator"
---

Օրինակում ցույց է տրված Run, Init մեթոդների և Properties հատկության օգտագործումը։


Օրինակում ցույց է տրվում տեղեկանք, որը հաշվարկվում է տվյալների աղբյուրի հիման վրա։
Հաշվարկը կատարվում է DataSourceIndicator-ը միացված ժամանակ որպեսզի ընթացքըում ցույց տրվի ընթացագոտի։

``` vb
' MODULE {NAME=MyModule;

Public Sub SampleReport(ByVal cliCode As String, ByVal startDate As Date, ByVal endDate As Date)

	Dim dsIndicator As DataSourceIndicator
	Dim xData As AsData
	Dim repView As AsRepViewer

	Set xData = Data("hbClVchs")
	Set dsIndicator = New DataSourceIndicator
	Set repView = CreateRepViewer()
	repView.Caption = "Գործողություններ"
	repView.AddFragment 80
	repView.AddRow " Ամսաթիվ               Գումար"

	dsIndicator.Init "MyModule","SampleReportLoader"
	dsIndicator.Properties.Add "RepView", repView
	dsIndicator.Properties.Add "CliCode", cliCode
	dsIndicator.Properties.Add "StartDate", startDate
	dsIndicator.Properties.Add "EndDate", endDate
	dsIndicator.Run xData

	repView.Show()
End Sub

Public Sub SampleReportLoader(ByVal xData As AsData, ByVal dsIndicator As DataSourceIndicator)
Dim repView As AsRepViewer

	Set repView = dsIndicator.Properties("RepView")

	xData.ClearParameters
	xData.Parameters("CliCode") = dsIndicator.Properties("CliCode")
	xData.Parameters("StartDate") = dsIndicator.Properties("StartDate")
	xData.Parameters("EndDate") = dsIndicator.Properties("EndDate")

	xData.OpenCursor

	Do While Not xData.EOF
		repView.AddRow VTOFS("DATE", xData("fDATE")) & " " & VTOFS("SUMMA", xData("fSUMMA"))
		xData.MoveNext
	Loop
	xData.CloseCursor
End Sub
```