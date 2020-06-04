---
layout: page
title: "OnFunctionDelete համակարգային իրադարձություն"
---

# OnFunctionDelete համակարգային իրադարձություն

[Տես նաև](TreeEvents.html) Օրինակ [Կիրառվում է](../Defs/Tree.md)


Աշխատում է այն դեպքում եթե ջնջելու կոճակը սեղմելիս [AllowDelete](../Functions/ASTREE/AllowDelete.html) իրադարձությունը =1-ի։ Եթե [AllowDelete](../Functions/ASTREE/AllowDelete.html)=0, իսկ ծառի սկրիպտային բաժնում մշակված է ծառը ջնջելու ֆունկցիան և `OnFunctionDelete` իրադարձությունը, ապա ջնջելու կոճակը սեղմելիս կաշխատի միայն տվյալ իրադարձությունը։

Происходит при нажатии кнопки удаления из панели инструментов в случае, если свойство 
[AllowDelete](../Functions/ASTREE/AllowDelete.html)=1. Если [AllowDelete](../Functions/ASTREE/AllowDelete.html)=0, а в скриптовой части дерева обработана функция удаления дерева и событие <strong>
OnFunctionDelete</strong>, то при нажатии кнопки удаления срабатывает только данное событие. 


## Շարահյուսություն

```as4x
Sub OnFunctionDelete()
   statements
End Sub
```

