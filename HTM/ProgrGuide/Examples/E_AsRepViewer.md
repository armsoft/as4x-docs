---
layout: page
title: "Օրինակ/AsRepViewer"
---

Օրինակում ցույց է տրված  AddFooter, AddFragment, AddHeader, AddRow, Show մեթոդների և Caption, UnMoveFragment, UnMoveHeadCount հատկությունների օգտագործումը։

Օրինակի մեջ [CreateRepViewer](../Functions/Functions/CreateRepViewer.html) ֆունկցիայով ստողում է տեղեկատու-հաշվետվության օբյեկտ, և տվյլաների աղբյուրց տվյալներ կարդալով լրացնում այն։

``` vb
Set xRep = CreateRepViewer()
xRep.Caption = "Հաշվների շրջանառություն"
xRep.AddFragment(97)
xRep.AddFragment(85)
xRep.UnMoveFragment = True
xRep.UnMoveHeadCount = 1
xRep.UseFormatting = True

xRep.AddHeader Space(9) & "Շրջանառություն " & Space(4) & VTOFS("DATE", SDate) & " - " & VTOFS("DATE", EDate)
xRep.AddHeader " Հաշիվ    <b>Նախ.մնացորդ      Մուտք         Ելթ           <i>Վերջն.մնացորդ </i> <b>   "

xDS = Data("TURN")
xDS.Parameters("STARTDATE") = SDate
xDS.Parameters("ENDDATE") = EDate
xDS.OpenCursor()
Do While Not xDS.EOF
    xRep.AddRow Space(5) & xDS("CODBAL") & Space(1) & _
        xDS.Formatted("STARTREM") & Space(1) & _
        xDS.Formatted("TURNIN") & Space(1) & _
        xDS.Formatted("TURNOUT") & Space(1) & _
        xDS.Formatted("ENDREM") & Space(1)
    totalStartRem += xDS("STARTREM")
    totalTurnIn += xDS("TURNIN")
    totalTurnOut += xDS("TURNOUT")
    totalEndRem += xDS("ENDREM")
    xDS.MoveNext()
Loop 
xDS.CloseCursor()

xRep.AddFooter Space(5) & "Ընդհանուր " & _
   VTOFS("SUMMA", totalStartRem) & Space(1) & _
   VTOFS("SUMMA", totalTurnIn) & Space(1) & _
   VTOFS("SUMMA", totalTurnOut) & Space(1) & _
   VTOFS("SUMMA", totalEndRem) & Space(1)

xRep.Show()
```

