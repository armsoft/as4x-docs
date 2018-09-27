﻿<html>
<head>
  <title>CurrentView</title>
  <link rel="stylesheet" href="../../common.css" />
    <style type="text/css">
        .style1
        {
            height: 29px;
        }
    </style>
</head>
<body>

  <h2>Объект текущий вид просмотра</h2>

  <p>
    Доступ к элементам текущей папки обеспечивается 
через функцию <a href="Functions/InterfaceManagment/CurrentView.html">CurrentView</a>.
  </p>

  <table>
    <thead>
      <tr>
        <th class="member">Свойства</th>
        <th>Описание</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="ASVIEW/AllowAccess.html">AllowAccess</a></td>
        <td>Возвращает или устанавливает разрешение на установку 
          доступов к документам из текущего вида просмотра.</td>
      </tr>
      <tr>
        <td><a href="AsView/AllowDelete.html">AllowDelete</a></td>
        <td>Возвращает или устанавливает разрешение на удаление 
          документа из текущего вида просмотра.</td>
      </tr>
      <tr>
        <td><a href="AsView/AllowEdit.html">AllowEdit</a></td>
        <td>Возвращает или устанавливает разрешение на корректировку 
          документа из текущего вида просмотра.</td>
      </tr>
      <tr>
        <td><a href="ASVIEW/AllowSecondEntry.html">AllowSecondEntry</a></td>
        <td>Возвращает или устанавливает разрешение на вторичный 
          ввод документа из текущего вида просмотра.</td>
      </tr>
      <tr>
        <td><a href="ASVIEW/AllowView.html">AllowView</a></td>
        <td>Возвращает или устанавливает разрешение на просмотр документа из текущего вида просмотра.</td>
      </tr>
      <tr>
        <td><a href="ASVIEW/AllowVisa.html">AllowVisa</a></td>
        <td>Возвращает или устанавливает разрешение на визирование 
          документа из текущего вида просмотра.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/BOF.html">BOF</a></td>
        <td>Проверяет выполнение условия &quot;начало файла&quot; для текущей папки.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/BookMark.html">BookMark</a></td>
        <td>Возвращает уникальный ключ для текущей строки папки.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/Caption.html">Caption</a></td>
        <td>Возвращает заголовок текущего вида просмотра.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/EOF.html">EOF</a></td>
        <td>Проверяет выполнение условия &quot;конец файла&quot; для текущей папки.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/NotGuarantedValue.html">NotGuarantedValue</a></td>
        <td>Возвращает значение указанной колонки текущей строки в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/Parameters.html">Parameters</a></td>
        <td>Возвращает значения параметров, использованных при вызове текущей папки.</td>
      </tr>
      <tr>
        <td class="style1"><a href="FrmPttel/RowCount.html">RowCount</a></td>
        <td class="style1">Возвращает количество строк в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/Selected.html">Selected</a></td>
        <td>Возвращает или устанавливает признак отмеченности текущей строки в папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/SelectedCount.html">SelectedCount</a></td>
        <td>Возвращает количество отмеченных строк в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/Updated.html">Updated</a></td>
        <td>Возвращает или устанавливает разрешение на обновление текущей папки.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/Value.html">Value</a></td>
        <td>Возвращает значение указанной <em>перманентной</em> колонки текущей строки в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/ViewCode.html">ViewCode</a></td>
        <td>Возвращает идентификатор базового вида просмотра для текущей папки. </td>
      </tr>
    </tbody>
  </table>

  <p>&nbsp;</p>

  <table>
    <thead>
      <tr>
        <th class="member">Методы</th>
        <th>Описание</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="FrmPttel/ExistsColumn.html">ExistsColumn</a></td>
        <td>Возвращает наличие колонки в текущем виде просмотра.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/Go.html">Go</a></td>
        <td>Переводит указатель записи на строку с указанным значением ключа.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/HistoryItem.html">HistoryItem</a></td>
        <td>Показывает папку истории документа текущей строки.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MoveFirst.html">MoveFirst</a></td>
        <td>Устанавливает указатель записи на первую строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MoveFirstSelected.html">MoveFirstSelected</a></td>
        <td>Устанавливает указатель записи на первую отмеченную строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MoveLast.html">MoveLast</a></td>
        <td>Устанавливает указатель записи на последнюю строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MoveLastSelected.html">MoveLastSelected</a></td>
        <td>Устанавливает указатель записи на последнюю отмеченную строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MoveNext.html">MoveNext</a></td>
        <td>Перемещает указатель записи на следующую строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MoveNextSelected.html">MoveNextSelected</a></td>
        <td>Перемещает указатель записи на следующую отмеченную строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MovePrevious.html">MovePrevious</a></td>
        <td>Перемещает указатель записи на предыдущую строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/MovePreviousSelected.html">MovePreviousSelected</a></td>
        <td>Перемещает указатель записи на предыдущую отмеченную строчку в текущей папке.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/RefreshItem.html">RefreshItem</a></td>
        <td>Обновляет текущий вид просмотра.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/RegistrFunction.html">RegistrFunction</a></td>
        <td>Добавляет в контекстное меню вызов пользовательской функции.</td>
      </tr>
        <tr>
        <td><a href="FrmPttel/RegistrDefaultFunction.html">RegistrDefaultFunction</a></td>
        <td>Устанавливает функцию по умолчанию для контекстного меню.</td>
        </tr>
      <tr>
        <td><a href="FrmPttel/RegistrNode.html">RegistrNode</a></td>
        <td>Добавляет узел в дерево вызовов пользовательских функций.</td>
      </tr>
      <tr>
        <td><a href="FrmPttel/Update.html">Update</a></td>
        <td>Обновляет указанную строчку в текущей папке.</td>
      </tr>
    </tbody>
  </table>
</body>
</html>