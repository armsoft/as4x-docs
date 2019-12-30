---
layout: page
title: "Օրինակ/SQL"
---

Օրինակում ցույց է տրված [տվյալների աղբյուրի](../Defs/Data.html) `SQL` իրադարձության օգտագործումը:

Մշակիչի մեջ ձևավորում է SQL հարցում, և փոխանցված պարամետրերից կախված այդ հարցումը բարդանում է։

``` vb
Sub SQL(ByRef sSQL As String, ByRef sUpdate As String)
    sSQL = "select fKEY as fKEY, fISN, fCOM, fECOM, fFOLDERID, fSPEC " & vbCrLf _
        & "from FOLDERS " & vbCrLf _
        & "where fFOLDERID = 'NBACC' " & vbCrLf
    If Trim(DS.Parameters("AccKey")) <> "" Then
        sSQL &= "    and fKEY like ?AccKey " & vbCrLf
    End If
    If Trim(DS.Parameters("Type")) <> "" Then
        sSQL &= "    and substring(fSPEC,1,3) = ?Type " & vbCrLf
    End If
    If Trim(DS.Parameters("User")) <> "" Then
        sSQL &= "    and substring(fSPEC,168,#LenUSER) = ?User " & vbCrLf
    End If
	If Not IsNull(DS.Parameters("OpenDateFrom")) Then
		sSQL &= "    and substring(fSPEC,10,8) >= ?OpenDateFrom " & vbCrLf
	End If
	If Not IsNull(DS.Parameters("OpenDateTo")) Then
		sSQL &= "    and substring(fSPEC,10,8) <= ?OpenDateTo " & vbCrLf
	End If

    sUpdate = sSQL & "    and fISN = ?ISNColumn " & vbCrLf
    sSQL &= "order by fKEY "
End Sub 
```