---
layout: page
title: "AsKernel/EnsureDbServiceIsConnected"
---

# EnsureDbServiceIsConnected մեթոդ

8X Սերվիսի հետ կապի անհասանելիության դեպքում փորձում է նորից կապ հաստատել սերվիսի հետ։
Ձախողման դեպքում առաջացնում է սխալ։

Սովորաբար օգտագործվում է դեպի սերվիս հարցումներ կատարելուց առաջ սերվիսի հասանելիությունը ստուգելու համար։

## Շարահյուսություն

```vb
Sub EnsureDbServiceIsConnected(Optional ByVal bUpdateSessionInfo As Boolean = True)
```

**Պարամետրեր**

* `bUpdateSessionInfo` - Սեսսիայի ինֆորմացիայի թարմացման հայտանիշ։ 
  Պարամետրի `true` արժեքի և սեսսիայի ինֆորմացիայի հին լինելու դեպքում թարմացնում է այն։