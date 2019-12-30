---
layout: page
title: "Օրինակ/AsErrorsFreeExecutor"
---

Օրինակում ցույց է տրված Run և SetErrSubParams մեթոդների օգտագործումը:

Օրինակի մեջ [CreateErrorsFreeExecutor](../Functions/Functions/CreateErrorsFreeExecutor.html) ֆունկցիայով ստեղծում է [AsErrorsFreeExecutor](../Functions/AsErrorsFreeExecutor.md)-ի օբյեկտ, որի հիմնական կանչվող ֆունկցիան լինելու է `SubCanRaiseError`-ը, իսկ սխալների մշակողը `SubErrorHandler`-ը։ 
Նշանակվում է հաշվետվություն (RepViewer), որի մեջ պահվում են սխալների մասին հաղորդագրությունները։
Տողերը մշակվում են հերթականությամբ, ամեն տողի համար կանչելով [Run](../Functions/AsErrorsFreeExecutor/Run_Err.md) մեթոդը։ 
Մինչև մշակում ամեն տողի համար կանչած է [SetErrSubParams](../Functions/AsErrorsFreeExecutor/SetErrSubParams.md) մեթոդը, որը նախասահմանում է պարամետրերը, որոնք սխալի առաջացման դեպքում կփոխանցվեն սխալի մշակիչ մեթոդին։


``` vb
' MODULE {NAME=MyModule

Public Sub Sample()
Dim errFee As AsErrorsFreeExecutor, sSql As String, rs As rdoResultset
    '
    Set errFee = CreateErrorsFreeExecutor("MyModule", "SubCanRaiseError", "SubErrorHandler")
    Set errFee.RepViewer = CreateRepViewer()
    errFee.RepViewer.AddFragment 120

    sSql = "select fISN from ..."
    Set rs = Util.ExecuteQuery(sSql, True)
    Do While Not rs.EOF
        errFee.SetErrSubParams(rs("fISN"), errFee.RepViewer)
        errFee.Run(rs("fISN"))
        rs.MoveNext
    Loop
    rs.close

    If errFee.RepViewer.RowCount > 0 Then
        errFee.RepViewer.Show()
    End If
End Sub

' կատարում է orderISN-ի մշակում, և կարող է առաջացնել սխալ
Public Sub SubCanRaiseError(ByVal orderISN As Long)
    '
End Sub

'   Սխալի առաջացման դեպքում հաշվետվության մեջ գրվում է սխալի համարը և մշակվող ISN-ը
Public Sub SubErrorHandler(ByVal orderISN As Long, ByVal errRep As AsRepViewer)
    errRep.AddRow(CStr(CurrentErrorsFreeExecutor().ErrorsCount) & ". " & CStr(orderISN))
End Sub
```
