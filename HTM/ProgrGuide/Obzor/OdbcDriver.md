---
layout: page
title: "Նոր ODBC driver-ի անցման փոփոխությունների ուղեցույց"
---

## Բովանդակություն
* [Ընդհանուր ինֆորմացիա](#ընդհանուր-ինֆորմացիա)
* [Util.ExecuteQuery](#utilexecutequery)
  * [Արդյունք չվերադարձնող հարցումներ](#արդյունք-չվերադարձնող-հարցումներ)
  * [Ոչ մեծ արդյունք վերադարձնող հարցումներ կամ հարցումներ, որ ընթացքում այլ հարցումներ են կատարվում կամ տողերի քանակից կախված ալգորիթմով օգտագործվող (rdOpenKeyset-ով կանչված) հարցումներ](#ոչ-մեծ-արդյունք-վերադարձնող-հարցումներ-կամ-հարցումներ-որ-ընթացքում-այլ-հարցումներ-են-կատարվում-կամ-տողերի-քանակից-կախված-ալգորիթմով-օգտագործվող-rdopenkeyset-ով-կանչված-հարցումներ)
  * [1 արժեք (Scalar) վերադարձնող հարցումներ](#1-արժեք-scalar-վերադարձնող-հարցումներ)
  * [Մեծ արդյունք վերադարձնող հարցումներ, որոնց ընթացքում այլ հարցումներ չեն կատարվում և դրանք օգտագործող ալգորիթմները տողերի քանակից կախված չեն](#մեծ-արդյունք-վերադարձնող-հարցումներ-որոնց-ընթացքում-այլ-հարցումներ-չեն-կատարվում-և-դրանք-օգտագործող-ալգորիթմները-տողերի-քանակից-կախված-չեն)
* [Տվյալների աղբյուրներ](#տվյալների-աղբյուրներ)
  * [Ինտերֆեյսից կանչվող տվյալների աղբյուրներ, որոնք ստեղծում են ժամանակավոր աղյուսակներ, բայց OnEachRow, Valid, ... ֆունկցիաներում դրանք չեն օգտագործվում](#ինտերֆեյսից-կանչվող-տվյալների-աղբյուրներ-որոնք-ստեղծում-են-ժամանակավոր-աղյուսակներ-բայց-oneachrow-valid--ֆունկցիաներում-դրանք-չեն-օգտագործվում)
  * [Տվյալների աղբյուրներ, որ օգտագործված են տրանզակցիաների ընթացքում կամ այլ տվյալների աղբյուրների OnEachRow, Valid,... ֆունկցիաներում](#տվյալների-աղբյուրներ-որ-օգտագործված-են-տրանզակցիաների-ընթացքում-կամ-այլ-տվյալների-աղբյուրների-oneachrow-valid-ֆունկցիաներում)
* [AsQuery](#asquery)
  * [Ոչ մեծ արդյունք վերադարձնող հարցումներ կամ հարցումներ, որ ընթացքում այլ հարցումներ են կատարվում կամ տողերի քանակից կախված ալգորիթմով օգտագործվող (rdOpenKeyset-ով կանչված) հարցումներ](#ոչ-մեծ-արդյունք-վերադարձնող-հարցումներ-կամ-հարցումներ-որ-ընթացքում-այլ-հարցումներ-են-կատարվում-կամ-տողերի-քանակից-կախված-ալգորիթմով-օգտագործվող-rdopenkeyset-ով-կանչված-հարցումներ-1)
  * [Մեծ արդյունք վերադարձնող հարցումներ, որոնց ընթացքում այլ հարցումներ չեն կատարվում և դրանք օգտագործող ալգորիթմները տողերի քանակից կախված չեն](#մեծ-արդյունք-վերադարձնող-հարցումներ-որոնց-ընթացքում-այլ-հարցումներ-չեն-կատարվում-և-դրանք-օգտագործող-ալգորիթմները-տողերի-քանակից-կախված-չեն-1)
* [ColumnTo* ֆունկցիաներ](#columnto-ֆունկցիաներ)
* [Փոփոխություններ](#փոփոխություններ)
* [Լրացուցիչ հղումներ](#լրացուցիչ-հղումներ)


## Ընդհանուր ինֆորմացիա

* Ավելացվել է նոր դաս` dbc, որում ավելացված ֆունկցիաները հանդիսանում են գործիքներ առանց պարամետրի (պարամետրերի արժեքները հարցման տեքստի մեջ տեղադրած) հարցումներ կատարելու: Դրանք  փոխարինում են Util դասի ExecuteQuery ֆունկցիային: 
* AsQuery դասում ավելացել են ֆունկցիաներ, որ փոխարինում են նույն դասի «հին» շարահյուսությամբ ֆունկցիաներին և դասը հանդիսանում է «թույլ» տիպավորված պարամետրերով հարցումներ կատարելու գործիք:
* Ավելացվել է նոր դաս` AsDataTable, որ թույլ է տալիս հարցման արդյունքները քեշավորել օպերատիվ հիշողության մեջ. Կարող է բեռնել այնքան տվյալ, որքան կբավարարի ազատ օպերատիվ հիշողությունը: As-4x միջուկի վրա հիմնված ծրագրերը 32բիթանոց են, դրանց հասանելի օպերատիվ հիշողությունը չի կարող գերազանցել 2ԳԲ:
* Համակարգում ավելացել և ավելանալու են նոր միացումներ և վերոհիշյալ գործիքները լիարժեքորեն սատարում են հարցման կատարման համար միացման ընտրության հնարավորությունը:
* Olap-ի միացմամբ հարցումներ կատարելու համար այժմ անհրաժեշտ է օգտագործել միացման ընտրության պարամետրը. Տողի մեջ OLAPDB.. նոր ֆունկցիաներում չի կարելի գրել: Տվյալների աղբյուրի հիմնական հարցումը OLAPDB.. գրելաձևը շարունակում է սատարել: DBARCHIVE.. գրելաձևը սատարվում է:
* Varchar(Max), Nvarchar(Max), Varbinary(Max) տիպի սյուները կամ դրանց հին համարժեքները պետք է թվարկված լինեն Select-ի սյուների վերջում: Մի քանի այդպիսի սյան առկայության դեպքում արժեքները պետք է մշակվեն թվարկման հերթականությամբ:
* Rdo-ով կատարվող Varchar(Max), Nvarchar(Max), Varbinary(Max) տիպի սյուներ կամ դրանց հին համարժեքներ վերադարձնող հարցումները պետք է կատարվեն առնվազն rdOpenKeyset-ով
* dbc, AsQuery դասերի ֆունկցիաները դեռևս ներառում են RSType պարամետրը. Այն օգտագործվում է միայն «հին» ռեժիմում և հեռացվելու է, երբ համակարգը աշխատի միայն նոր ռեժիմով: 
* Անհրաժեշտ է ուշադրություն դարձնել պարամետրերի փոխված հերթականությանը:
* Ծրագրային օգտագործման դեպքում Տվյալների աղբյուրի OpenCursor ֆունկցիային ավելացվել է հիմնական հարցման ընտրության հնարավորություն. Ինտերֆեյսից կանչելիս հիմնական հարցումը կատարվում է Connectiօns_DS միացումով:
* Նոր դրայվերի անցումը տալիս է հնարավորություն օգտագործել SQL-ում եղած, բայց rdo-ի պատճառով մինչ այդ անհասանելի հնարավորություններ:


## Util.ExecuteQuery

### Արդյունք չվերադարձնող հարցումներ

<table>
<tr>
<td>
<pre>
Util.ExecuteQuery QueryText, false, x, y, z, QueryTimeout
</pre>
</td>
<td>
<pre>
dbc.ExecuteNonQuery QueryText, QueryTimeout
</pre>
</td>
</tr>
</table>


### Ոչ մեծ արդյունք վերադարձնող հարցումներ կամ հարցումներ, որ ընթացքում այլ հարցումներ են կատարվում կամ տողերի քանակից կախված ալգորիթմով օգտագործվող (rdOpenKeyset-ով կանչված) հարցումներ

<table>
<tr>
<td>
<pre>
Dim rs As rdoResultset
Set rs = Util.ExecuteQuery( _
              "Query text", 
              true, _
              RSType, _
              LockType, _
              RsOption, _
              QueryTimeout)
'Use rs.RowCount
Do While Not rs.EOF
  'Use rs!fFIELD
  rs.MoveNext
Loop
rs.Close
Set rs = Nothing
</pre>
</td>
<td>
<pre>
Dim rs As AsDataTable
Set rs = dbc.OpenDataTable( _
              "Query text", _
              QueryTimeout, 
              , _
              RSType)


'Use rs.RowCount
Do While Not rs.EOF
  'Use rs("fFIELD")
  rs.MoveNext
Loop

Set rs = Nothing
</pre>
</td>
</tr>
</table>

* Անհրաժեշտ է հեռացնել rs.Close-ը
* Set rs = Nothing անհրաժեշտ է, եթե օգտագործվող հիշողությունը ֆունկցիայի ավարտից ավելի շուտ ազատելու կարիք կա
* Ցանկալի է rs!fField փոխարինել rs("fFIELD")-ով 

### 1 արժեք (Scalar) վերադարձնող հարցումներ

<table>
<tr>
<td>
<pre>
Dim rs As rdoResultset
Set rs = Util.ExecuteQuery( _
                "Query text", 
                true, _
                RSType, _
                LockType, _
                RsOption, _
                QueryTimeout)
If Not rs.EOF Then
  'Use rs!fFIELD0 ' Use rs(0)
End If
rs.Close
Set rs = Nothing
</pre>
</td>
<td>
<pre>
Dim resultValue As Variant
resultValue = dbc.ExecuteScalar( _
                "Query text", _
                QueryTimeout)


If Not IsEmpty(resultValue) Then
  'Use resultValue
End If
</pre>
</td>
</tr>
</table>

### Մեծ արդյունք վերադարձնող հարցումներ, որոնց ընթացքում այլ հարցումներ չեն կատարվում և դրանք օգտագործող ալգորիթմները տողերի քանակից կախված չեն

<table>
<tr>
<td>
<pre>
Dim rs As rdoResultset
Set rs = Util.ExecuteQuery( _
              "Query text", 
              true, _
              RSType, _
              LockType, _
              RsOption, _
              QueryTimeout)
Do While Not rs.EOF
  'Use rs!fField
  rs.MoveNext
Loop
rs.Close
</pre>
</td>
<td>
<pre>
Dim rs As AsSqlResultSet
Set rs = dbc.ExecuteReader( _
              "Query text", _
              QueryTimeout, 
              , _
              RSType)
  

Do While Not rs.EOF
  'Use rs("fFIELD")
  rs.MoveNext
Loop
rs.Close
</pre>
</td>
</tr>
</table>

* Ցանկալի է rs!fField փոխարինել rs("fFIELD")-ով

## Տվյալների աղբյուրներ

### Ինտերֆեյսից կանչվող տվյալների աղբյուրներ, որոնք ստեղծում են ժամանակավոր աղյուսակներ, բայց OnEachRow, Valid, ... ֆունկցիաներում դրանք չեն օգտագործվում

<table>
<tr>
<td>
<pre>
Util.ExecuteQuery QueryText, false, x, y, z, QueryTimeout
</pre>
</td>
<td>
<pre>
dbc.ExecuteNonQuery QueryText, QueryTimeout, Connectiօns_DS
</pre>
</td>
</tr>
</table>

### Տվյալների աղբյուրներ, որ օգտագործված են տրանզակցիաների ընթացքում կամ այլ տվյալների աղբյուրների OnEachRow, Valid,... ֆունկցիաներում

Քանի որ տվյալների աղբյուրի տվյալների բեռնման հիմնական հարցումը կատարվելու է այլ միացումով, տվյալների աղբյուրը չի տեսնի հիմնական միացմամբ արդեն փոխված տվյալները: Եթե տվյալների աղբյուրը չունի ամեն տողի համար կատարվող հարցումներ, ապա կարելի է OpenCursor ֆունկցիայում ավելացված նոր պարամետրով ապահովել, որ հիմնական հարցումը կատարվի գլխավոր միացմամբ, հակառակ դեպքում այս տվյալների աղբյուրների օգտագործումը պետք է բացառել և փոխարինել տվյալները այլ ալգորիթմով ստանալով:

<table>
<tr>
<td>
<pre>
oData.OpenCursor CursorType, LockType, Indicate
</pre>
</td>
<td>
<pre>
oData.OpenCursor CursorType, LockType, Indicate, Connectiօns_Main
</pre>
</td>
</tr>
</table>

## AsQuery

### Ոչ մեծ արդյունք վերադարձնող հարցումներ կամ հարցումներ, որ ընթացքում այլ հարցումներ են կատարվում կամ տողերի քանակից կախված ալգորիթմով օգտագործվող (rdOpenKeyset-ով կանչված) հարցումներ

<table>
<tr>
<td>
<pre>
Dim rs As rdoResultset
Set rs = oAsQuery.ExecuteReader( _
RSType, RSLocktype, RSOption, QueryTimeout)    

'Use rs.RowCount
Do while Not rs.EOF
  'Use rs!fFIELD
  rs.MoveNext
Loop
rs.Close
Set rs = Nothing
</pre>
</td>
<td>
<pre>
Dim rs As AsDataTable
Set rs = oAsQuery.OpenDataTable( _
              QueryTimeout, , RSType)

'Use rs.RowCount
Do while Not rs.EOF
  'Use rs("fFIELD")
  rs.MoveNext
Loop

Set rs = Nothing
</pre>
</td>
</tr>
</table>

* Վերադարձվող տիպը rdoResultSet չէ այլ AsDataTable:
* Անհրաժեշտ է հեռացնել rs.Close-ը
* Set rs = Nothing անհրաժեշտ է, եթե օգտագործվող հիշողությունը ֆունկցիայի ավարտից ավելի շուտ ազատելու կարիք կա
* Ցանկալի է rs!fField փոխարինել rs("fFIELD")-ով

### Մեծ արդյունք վերադարձնող հարցումներ, որոնց ընթացքում այլ հարցումներ չեն կատարվում և դրանք օգտագործող ալգորիթմները տողերի քանակից կախված չեն

<table>
<tr>
<td>
<pre>
Dim rs as rdoResultSet
Set rs = oAsQuery.ExecuteReader( _
  RSType, RSLocktype, RSOption, QueryTimeout)

Do while Not rs.EOF
  'Use rs!fField
  rs.MoveNext
Loop
rs.Close
</pre>
</td>
<td>
<pre>
Dim rs as AsSqlResultSet
Set rs = oAsQuery.ExecuteReader( _
  QueryTimeout, , RSType)
  
Do while Not rs.EOF
  'Use rs("fFIELD")
  rs.MoveNext
Loop
rs.Close
</pre>
</td>
</tr>
</table>

* Վերադարձվող տիպը rdoResultSet չէ այլ AsSqlResultSet:
* Ցանկալի է rs!fField փոխարինել rs("fFIELD")-ով

## ColumnTo* ֆունկցիաներ

rdoResultSet-ից AsSqlResultSet-ի անցնելիս, անհրաժեշտ է փոխարինել հետևյալ ֆունկցիաների կանչերը`

|Հին ֆունկցիա|Նոր ֆունկցիա|
|:--|:--|
| ColumnToString | SqlColumnToString |
| ColumnToFile | SqlColumnToFile |
| ColumnToFileText | SqlColumnToFileText |

ColumnToString-ի դեպքում այլ է պարամետրերի ցուցակը

## Փոփոխություններ

1. Համակարգից հեռացվել է AsData դասի OpenCursor() ֆունկցիայի վերջին արգումենտը (blnWithPrevious):  
AsData դասի ֆունկցիաներ BOF()-ը,MovePrevious()-ը,MoveFirst()-ը և MoveLast()-ը,CursorRowCount-ը նոր Odbc Driver-ով աշխատելիս կառաջացնեն սխալ։ Անցումային և հին Odbc Driver-ի ռեժիմներով աշխատելիս Debug տարբերակում ցույց կտրվի ,որ այդ ֆունկցիաները հնացել են,իսկ Release տարբերակում ոչինչ չի փոխվի։
2. AsQuery.ExecuteScalar  և AsQuery.ExecuteReader ֆունկցիաների նախատիպերը փոխվել են`  
    ``` vb
    Public Function ExecuteScalar(Optional ByVal QueryTimeout As Long = -1, _
                                  Optional ByVal lConnectionType As ConnectionType = Connection_Main) As Variant
    ``` 
    ``` vb
    Public Function ExecuteReader(Optional ByVal QueryTimeout As Long = -1, _
                                  Optional ByVal lConnectionType As ConnectionType = Connection_Main, _
                                  Optional ByVal lCursorType As ResultsetTypeConstants = rdOpenForwardOnly) As AsSqlResultset
    ```

## Լրացուցիչ հղումներ

[AsSqlCommand օբյեկտ](../Functions/AsSqlCommand.md)

[AsSqlCommand օրինակներ](../Examples/AsSqlCommand.md)

[AsDbc օրինակներ](../Examples/AsDbc.md)
