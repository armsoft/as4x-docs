---
layout: page
title: "Օրինակ/SQL"
---

# Օրինակում ցույց է տրված SQL իրադարձության օգտագործումը

Ստորև բերված է [տվյալների աղբյուրի նկարագրության](../Defs/Data.html) հատված, `SQL`իրադարձության մշակիչի օրինակով։

Կախված տվյալների աղբյուր փոխանցված պարամետրերի քանակից SQL հարցումը բարդանում է։
Ниже приведен фрагмент из [описания источника данных](../Defs/Data.html) с примером обработчика события `SQL`. В зависимости от количества переданных параметров в источник данных SQL запрос усложняется.


``` vb
Sub SQL(ByRef sSQL, ByRef sUpdate)

   sSQL = " select fKEY as fKEY, fISN,fCOM,fECOM,fFOLDERID,fSPEC   " & _
              " from FOLDERS where fFOLDERID = 'NBACC' "
   IF trim(DS.Parameters(1)) <> "" Then 
       sSQL = sSQL & " And SUBSTRING(fSPEC,2*#LenSumma,100) like ?1 " 
   End IF    
   IF trim(DS.Parameters(2)) <> "" Then sSQL = sSQL & " And fKEY like ?2 "
   IF trim(DS.Parameters(3)) <> "" Then sSQL = sSQL & " And SUBSTRING(fSPEC,1,3) = ?3 "
   IF trim(DS.Parameters(7)) <> "" Then sSQL = sSQL & " And SUBSTRING(fSPEC,168,#LenUSER) = ?7 "
   sUpdate = sSQL & " And fISN = ?8 "
   sSQL = sSQL & " ORDER by ?6" 
End Sub 
```