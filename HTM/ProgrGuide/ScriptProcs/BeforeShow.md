---
layout: page
title: "BeforeShow իրադարձություն"
---

# BeforeShow ծառի համակարգային իրադարձություն 

[Տես նաև](../scriptstproced.md) Օրինակ [Կիրառվում է](../Functions/Astree.md)

BeforeShow իրադարձությունը առաջանում է ծառի ցուցադրելուց առաջ (ոչ մոդալ)։

Եթե BeforeShow իրադարձությունը մշակվում է, ապա ծառի նկարագրության մեջ գրված [AllowAddNode](../Functions/ASTREE/AllowAddNode.md),
[AllowDelete](../Functions/ASTREE/AllowDelete.md), 
[AllowEdit](../Functions/ASTREE/AllowEdit.md), 
[AllowExport](../Functions/ASTREE/AllowExport.md),
[AllowView](../Functions/ASTREE/AllowView.md) հատկությունների արժեքները անտեսվում են։

## Շարահյուսություն

Բաղադրիչներն են՝

``` vb
Public Sub BeforeShow(ByRef AllowEdit as Boolean, _
					  ByRef AllowView as Boolean, _
					  ByRef AllowDelete as Boolean, _
					  ByRef AllowAddNode as Boolean, _
					  ByRef AllowExport as Boolean, _
					  ByRef AllowAddDocs as Boolean)
    ' statements
End Sub
```

| Պարամետր | Նկարագրություն |
|--|--|
| AllowEdit | Ծառի տարրի խմբագրման թույլտվություն։ |
| AllowView | Ծառի տարրի դիտելու թույլտվություն։ |
| AllowDelete | Ծառի տարրի ջնջելու թույլտվություն։ |
| AllowAddNode | Ծառում նոր հանգույց ավելացնելու թույլտվություն։ |
| AllowExport | Ծառի կամ տարրի արտահանման թույլտվություն։ |
| AllowAddDocs | Ծառում փաստաթղթեր ավելացնելու թույլտվություն։ |
