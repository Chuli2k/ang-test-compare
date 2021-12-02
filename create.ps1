# ng g component module4/comp41  --module=module4
# ng g component module4/comp42  --module=module4
# ng g component module4/comp43  --module=module4
# ng g component module4/comp44  --module=module4
# ng g component module4/comp45  --module=module4
# ng g component module4/comp46  --module=module4
# ng g component module4/comp47  --module=module4
# ng g component module4/comp48  --module=module4
# ng g component module4/comp49  --module=module4
# ng g component module4/comp410 --module=module4

for ($m = 6; $m -le 10; $m++) {
  for ($c = 1; $c -le 10; $c++) {
    $component = "module" + $m + "/comp" + $m + $c
    $module = "module" + $m
    ng g component $component --module=$module
  }
}