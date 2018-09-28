---
# Content index for Tipue Search
# https://github.com/jekylltools/jekyll-tipue-search
# v1.4
layout: null
---
{%- assign index = "" | split: "" -%}
{%- assign excluded_files = site.tipue_search.exclude.files -%}
{%- assign excluded_tags = site.tipue_search.exclude.tags | uniq -%}
{%- assign excluded_categories = site.tipue_search.exclude.categories | uniq -%}
{%- assign excluded_taxonomies = excluded_tags | concat: excluded_categories | uniq -%}
{%- for post in site.posts -%}
  {%- unless post.exclude_from_search == true or excluded_files contains post.path -%}
    {%- assign has_excluded_taxonomy = false -%}
    {%- for tag in post.tags -%}
      {%- if excluded_taxonomies contains tag -%}
        {%- assign has_excluded_taxonomy = true -%}
      {%- endif -%}
    {%- endfor -%}
    {%- for category in post.categories -%}
      {%- if excluded_taxonomies contains category -%}
        {%- assign has_excluded_taxonomy = true -%}
      {%- endif -%}
    {%- endfor -%}
    {%- unless has_excluded_taxonomy == true -%}
      {%- assign index = index | push: post | uniq -%}
    {%- endunless -%}
  {%- endunless -%}
{%- endfor -%}
  /*
    //site.tipue_search.include.pages
  */
{%- if site.tipue_search.include.pages == true -%}
  /*
    //site.tipue_search.include.pages
  */
  {%- for page in site.html_pages -%}
    /*
      // {{ page.title | smartify | strip_html | normalize_whitespace | jsonify }}
      // {{ page.url | smartify | strip_html | normalize_whitespace | jsonify }}
    */
    {%- unless page.exclude_from_search == true or excluded_files contains page.path -%}
      {%- assign has_excluded_taxonomy = false -%}
      {%- for tag in page.tags -%}
        {%- if excluded_taxonomies contains tag -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- for category in page.categories -%}
        {%- if excluded_taxonomies contains category -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- unless has_excluded_taxonomy == true -%}
        {%- assign index = index | push: page | uniq -%}
      {%- endunless -%}
    {%- endunless -%}
  {%- endfor -%}
{%- endif -%}
  /*
    //end site.tipue_search.include.pages
  */

  /*
    //site.html_files
  */
  {%- for file in site.html_files -%}
  /*
    // {{ file.path | smartify | strip_html | normalize_whitespace | jsonify }}
  */

  {%- endfor -%}


  /*
    //site.static_files
  */
  {%- for file in site.static_files -%}
  /*
    // {{ file.path | smartify | strip_html | normalize_whitespace | jsonify }}
  */
  {%- endfor -%}





  /*
    // site.documents
  */
  {%- for document in site.documents -%}
  /*
    // {{ document.title | smartify | strip_html | normalize_whitespace | jsonify }}
    // {{ document.url | smartify | strip_html | normalize_whitespace | jsonify }}
  */
  {%- endfor -%}



 {%- for collection in site.tipue_search.include.collections -%}
  {%- assign documents = site.documents | where:"collection",collection -%}
  {%- for document in documents -%}
    {%- unless document.exclude_from_search == true or excluded_files contains document.path -%}
      {%- assign has_excluded_taxonomy = false -%}
      {%- for tag in document.tags -%}
        {%- if excluded_taxonomies contains tag -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- for category in document.categories -%}
        {%- if excluded_taxonomies contains category -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- unless has_excluded_taxonomy == true -%}
        {%- assign index = index | push: document | uniq -%}
      {%- endunless -%}
    {%- endunless -%}
  {%- endfor -%}
{%- endfor -%}

var tipuesearch = {"pages": [
{%- for document in index -%}
  {%- assign tags = document.tags | uniq -%}
  {%- assign categories = document.categories | uniq -%}
  {%- assign taxonomies = tags | concat: categories | uniq -%}
  {
    "title": {{ document.title | smartify | strip_html | normalize_whitespace | jsonify }},
    "text": {{ document.content | strip_html | normalize_whitespace | jsonify }},
    "tags": {{ taxonomies | join: " " | normalize_whitespace | jsonify }},
    "url": {{ document.url | relative_url | jsonify }}
  }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
]};