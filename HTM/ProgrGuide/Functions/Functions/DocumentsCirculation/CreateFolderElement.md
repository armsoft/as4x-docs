---
layout: page
title: "CreateFolderElement"
---

## CreateFolderElement  մեթոդ
     [свойства методы](../../AsFoldElement.html)
    Ստեղծում է նոր թղթապանակի տարր հետագայում զբաղեցնելու(օգտագործելու) և հիշելու համար:

## Շարահյուսություն`


Set sNewFolderEl = CreateFolderElement(FolderId)

 Բաղադրիչներն են`

    
    
|| Պարամետր | Նկարագրություն | Տիպ |
|--|--|
|sNewFolderEl|Փոփոխական,որը հղվում է նոր թղթապանակի տարրի վրա:| AsFolderElement |
|FolderId    |Տողային արտահայտություն,որը կլինի ստեղծված թղթապանակի ներքին անունը: Պարտադիր պարամետր:| String |



## Նկատառումեր`

    [См. также](../../../constructors.html)

##   CreateFolderElement մեթոդի օրինակ`
   Օրինակում կանչվում է CreateFolderElement մեթոդը,  xFoldEl-ը հանդիսանում է նոր թղթապանակի տարրը, իր դաշտերով և մեթոդներով, ընդորում xFoldEl.FolderID  =  "NBACC":

Set xFoldEl = CreateFolderElement("NBACC")
xFoldEl.Com = Doc("Name")
xFoldEl.Ecom = Doc("EName")
xFoldEl.Spec = Doc("NOMDOK") & Doc.Formatted("MTCCOUNT") & Doc("COMENT") 
xFoldEl.Status = "E"
Doc.StoreInFolder xFoldEl


