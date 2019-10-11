---
layout: page
title: "Օրինակ/AsQuery"
---


# Օրինակում բերված է  AsQuery-ի օգտագործումը

[Применяется к](../Functions/AsQuery.html)
    

Օրինակի մեջ ցույց է տրված ExecuteNonQuery մեթոդի օգտագործումը, SQL հարցման առանց վերադարձվող արժեքի կատարման համար:
В примере показано использование метода ExecuteNonQuery для выполнения SQL-запроса без возвращаемого значения.
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
Օրինակի մեջ ցույց է տրված ExecuteNonQuery մեթոդի օգտագործումը, SQL հարցման և միակ արժեքի վերադարձի կատարման համար:
В примере показано использование метода ExecuteScalar для выполнения SQL-запроса и возвращения единственного значения.

``` vb
Dim usedIsn As Long
With New AsQuery
    .SQL = "select fISN " _
         & "from RESNUMBERS " _
         & "where fTYPE = ?TYPE and fNUMBER = ?NUMBER "
    .Parameters("TYPE") = "C"
    .Parameters("NUMBER") = "V-123456"

    usedIsn = .ExecuteScalar()
End With
```
Օրինակի մեջ ցույց է տրված ExecuteNonQuery մեթոդի օգտագործումը, SQL հարցման և մեկից ավել արժեքի վերադարձի կատարման համար:
В примере показано использование метода ExecuteReader для выполнения SQL-запроса и возвращения более одного значения.

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