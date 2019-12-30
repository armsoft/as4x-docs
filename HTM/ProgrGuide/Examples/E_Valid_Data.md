---
layout: page
title: "Օրինակ/Valid Example for DataSource"
---

Օրինակում ցույց է տրված [տվյալների աղբյուրի](../Defs/Data.html) `Valid` իրադարձության օգտագործումը:

Տվյալների աղբյուրի հաշվարկի ժամանակ ամեն տողի համար նախ աշխատացվում է `Valid` իրադարձության մշակիչը, որում կատարվում է ստուգում և որոշվում է այդ տողը ցույց տալ, թե ոչ։ Տվյալ դեպքում ստուգվում է իրավասությունը։

``` vb 
'SCRIPT {
Dim mDbSum, mCrSum, mAMDDb, mAMDCr, mParVal
'
'Sub SQL(ByRef sSQL As String, ByRef sUpdate As String)
'    '''
'End Sub
'
Function Valid()
   Valid = Util.CheckAccess(DS("fISN"),3)
End Function

Sub OnEachRow()
    AccRem(DS("fISN"), DS.Parameters("Date"), DS("DBCR"), mDbSum, mCrSum, mAMDDb, mAMDCr)
End Sub
```