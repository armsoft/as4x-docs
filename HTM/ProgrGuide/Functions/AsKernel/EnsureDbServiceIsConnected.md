---
layout: page
title: "AsKernel/EnsureDbServiceIsConnected"
---

# EnsureDbServiceIsConnected մեթոդ

```vb
Public Sub EnsureDbServiceIsConnected(Optional ByVal bUpdateSessionInfo As Boolean = True)
```

Սերվիսի հետ կապի անհասանելիության դեպքում փորձում է նորից կապ հաստատել սերվիսի հետ։
Ձախողման դեպքում առաջացնում է սխալ։

Սովորաբար օգտագործվում է դեպի սերվիս հարցումներ կատարելուց առաջ սերվիսի հասանելիությունը ստուգելու համար։

**Պարամետրեր**

* `bUpdateSessionInfo` - Սեսսիայի ինֆորմացիայի թարմացման հայտանիշ։ Պարամետրի `true` արժեքի և սեսսիայի ինֆորմացիայի հին լինելու դեպքում թարմացնում է այն։