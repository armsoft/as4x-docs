---
layout: page
title: "Օրինակ/AsData"
---

Օրինակում ցույց է տրված Caption, DColCount, DParCount, EOF, Formatted, IndicateCaption, Name, Parameters, SQL, UpdateSQL, Value հատկությունների և CloseCursor, MoveFirst, MoveLast, MoveNext, OpenCursor մեթոդների օգտագործումը։

Օրինակի մեջ կանչվում է Data ֆունկցիան, xDS-ի միջոցով վերադառնում է է "NBTURN2"-ի տվյալների աղբյուրի հղումը,  նրա բոլոր հատկություններով և մեթոդներով։

``` vb
Set xDS = Data("NBTURN2")
sCaption = xDS.Caption 
nDColCount = xDS.DColCount
nDParCount = xDS.DParCount
'
sName = xDS.Name 
sSQL = xDS.SQL
sUpdateSQL = xDS.UpdateSQL

xDS.Parameters(1) = xBal
xDS.Parameters(2) = "%/%"
xDS.Parameters(3) = "%"

'xDS.IndicateCaption = "Revaluate"
xDS.OpenCursor , , ASIndicateProgressBar

Do While Not xDS.EOF
    xDSSTARTREM = CCur(AsRoundDiv(xDS.Value("STARTREM"),cInt(RoundRate))) 
    STARTREM_Row = STARTREM_Row + xDSSTARTREM
    xRep.AddRow xDS.Formatted("CODBAL") & Space(2) & CODBALNAME
    xDS.MoveNext
Loop 
'
xDS.MoveFirst
'
xDS.MoveLast
'
xDS.CloseCursor     
```