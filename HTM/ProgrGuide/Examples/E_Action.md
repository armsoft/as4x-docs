---
layout: page
title: "Օրինակ/Action"
---

# Action իրադարձություն

[Փաստաթղթի նկարագրության մեջ](../Defs/doc.html) նկարագրված է Action իրադարձության մշակիչը, որը կախված փաստաթղթի վիճակից պահպանում է հաշվառումը, կամ չի պահպանում։

В [описании документа](../Defs/doc.html) описан обработчик события Action, который в зависимости от состояния документа сохраняет проводку или же нет.

``` vb
Sub Action()
   If doc.State=2 then Exit Sub
   Set xFOLDER = FolderElProp("OPNBACC",doc("CODNBACC"))
   xCODBAL = MID(xFOLDER.SPEC,4,#LenBalAcc)
   Set xDOC = LoadDoc(xFOLDER.ISN)

   Set xFact = CreateFact("02")
   xFact.OpDate = Doc("DATEPUT")
   xFact.Object = xFOLDER.Key
   If xDOC("CODVAL") <> "000" and trim(xDOC("CODVAL")) <> "" Then
      xFact.Summa = CurValue(xDOC("CODVAL"), Doc("DATEPUT")) * Doc("DOCSUMMA")
      xFact.Cur = xDOC("CODVAL")
   Else
      xFact.Summa = Doc("DOCSUMMA")
      xFact.Cur = "000"
   End If
   xFact.CurSumma = Doc("DOCSUMMA")
   xFact.Op = "MSC"
   xFact.DBCR = "C"
   xFact.Spec = Doc("NOMDOK") & doc.Formatted("MTCCOUNT") 
   doc.StoreFact xFact
   doc.State=2
End Sub 
```

