---
layout: page
title: "Օրինակ/AsQuery"
---

Օրինակներ բերված է [AsQuery](../Functions/AsQuery.html)-ի օգտագործումներ։

* Օրինակ 1  
Ցույց է տրված [ExecuteNonQuery](../Functions/AsQuery/ExecuteNonQuery.html) մեթոդի օգտագործումը, երբ SQL հարցումը ոչինչ չի վերադարձնում:

```vb
With New AsQuery
    .SQL = "insert into RESNUMBERS (fISN, fTYPE, fNUMBER) " _
         & "values (?ISN, ?TYPE, ?NUMBER) "
    .Parameters("ISN") = 1234567890
    .Parameters("TYPE") = "C"
    .Parameters("NUMBER") = "V-123456"

    .ExecuteNonQuery()
End With
```

* Օրինակ 2  
Ցույց է տրված [ExecuteScalar](../Functions/AsQuery/ExecuteScalar.html) մեթոդի օգտագործումը, երբ SQL հարցումը վերադարձնում է միակ արժեք:

``` vb
Dim usedIsn As Variant
With New AsQuery
    .SQL = "select fISN " _
         & "from RESNUMBERS " _
         & "where fTYPE = ?TYPE and fNUMBER = ?NUMBER "
    .Parameters("TYPE") = "C"
    .Parameters("NUMBER") = "V-123456"

    usedIsn = .ExecuteScalar()
    If IsEmpty(usedIsn) Then
        usedIsn = 0
    End If
End With
```

* Օրինակ 3  
Ցույց է տրված [ExecuteReader](../Functions/AsQuery/ExecuteReader.html) մեթոդի օգտագործումը, երբ SQL հարցումը վերարդաձնում է տողերի բազմություն (rdoResultset):

```vb
Dim rs As rdoResultset
With New AsQuery
    .SQL = "select fISN, fTYPE " _
         & "from RESNUMBERS " _
         & "where fNUMBER = ?NUMBER "
    .Parameters("NUMBER") = "V-123456"

    Set rs = .ExecuteReader()
End With
Do While Not rs.EOF
    '...
    '...
    rs.MoveNext
Loop
rs.Close
```