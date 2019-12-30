---
layout: page
title: "Օրինակ/OnOpen"
---

Օրինակում ցույց է տրված [տվյալների աղբյուրի](../Defs/Data.html) `OnOpen` իրադարձության օգտագործումը:

`OnOpen` իրադարձության մշակիչի մեջ ստանում է `mStartD` և `mEndD` գլոբալ փոփոխականների արժեքները պարամետրերից։  
Փոփոխականների արժեքները ստանցվում են մեկ անգամ, բայց հետո օգտագործվում են ամեն տողի [OnEachRow](../ScriptProcs/OnEachRow.html) իրադարձության մշակիչում։

``` vb
Dim mStartD As Date, mEndD As Date
Dim mDbTurn As Variant, mDbTurnAMD As Variant, mCrTurn As Variant, mCrTurnAMD As Variant
Dim mRemd As Variant, mRemdAMD As Variant, mStartRemd As Variant, mStartRemdAMD As Variant
'
'Sub SQL(ByRef sSQL As String, ByRef sUpdate As String)
'    '''
'End Sub
'
Sub OnOpen()
    If IsNull(DS.Parameters("StartDate")) Then
        mStartD = Param("STARTDATE")
    Else
        mStartD = DS.Parameters("StartDate") 'taking date parameter
    End If
    If IsNull(DS.Parameters("EndDate")) Then
        mEndD = Param("ENDDATE")
    Else
        mEndD = DS.Parameters("EndDate")
    End If
End Sub
'
Sub OnEachRow() 
    GetTurnFull("02", DS("fISN"), mStartD, mEndD, _ 
        mDbTurn, mDbTurnAMD, mCrTurn, mCrTurnAMD, _
        mRemd, mRemdAMD, mStartRemd, mStartRemdAMD)
End Sub   
```