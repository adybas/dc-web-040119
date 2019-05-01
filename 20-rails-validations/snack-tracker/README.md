# README

form_tag - general purpose
form_for - specifically tied to a model

To make nested forms work:

1) `accepts_nested_attributes_for :snacks`
2) Add to strong params of parent object (retailer)
3) Build stub for child elements `@retailer.snacks.build`