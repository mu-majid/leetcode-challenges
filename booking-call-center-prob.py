"""

To operate a call center, at any given day, a min of 3 english speaking, 2 dutch speaking and 1 spanish speaking employee need to be there. (you can have one employee speaking two or more languages)
An employee can atmost work for 5 days. For simplicity let's say an employee works for a standard of 8 hrs every day. (not sure if hours were relevant)
The call center operates 7 days a week.
Given employees and the languages they speak, can you atleast come up with a schedule for the first week ?

Employee 1 : English, Dutch
Employee 2 : English, Dutch
Employee 3: Spanish, Dutch
Employee 4: English, Dutch, Spanish
Employee 5: Dutch, Spanish
Employee 6: English, Dutch
Employee 7: English, Spanish

The input may not be complete, but you get the gist. I thought of greedy/dfs, but couldn't come up with a working solution."""

# employee_list : list[dict[str, list[str]]
def find_schedule(employee_list) -> list:
  n = len(employee_list)
  ENGLISH, DUTCH, SPANISH= 0, 1, 2

  def backtrack(employee, group_a_langs, group_b_langs, group_a, group_b):
    if valid(group_a_langs) and valid(group_b_langs):
      result.append(group_a)
      result.append(group_b)
      return True

    if employee == n:
      return False

    if valid(group_a_langs):
      group_b.append(employee)
      add_employee_to_group(employee, group_b_langs)
      return backtrack(employee + 1, group_a_langs, group_b_langs, group_a, group_b)
    elif valid(group_b_langs):
      group_a.append(employee)
      add_employee_to_group(employee, group_a_langs)
      return backtrack(employee + 1, group_a_langs, group_b_langs, group_a, group_b)
    else:
      group_a.append(employee)
      add_employee_to_group(employee, group_a_langs)
      if backtrack(employee + 1, group_a_langs, group_b_langs, group_a, group_b):
          return True
      remove_employee_from_group(employee, group_a_langs)
      group_a.pop()

      group_b.append(employee)
      add_employee_to_group(employee, group_b_langs)
      return backtrack(employee + 1, group_a_langs, group_b_langs, group_a, group_b)

  def valid(group_langs):
    return group_langs[ENGLISH] >= 3 and group_langs[DUTCH] >= 2 and group_langs[SPANISH] >= 1

  def add_employee_to_group(employee, group_langs):
    for lang in employee_list[employee].values():
      if lang == "English":
        group_langs[ENGLISH] += 1
      elif lang == "Dutch":
        group_langs[DUTCH] += 1
      else:
        group_langs[SPANISH] += 1

  def remove_employee_from_group(employee, group_langs):
    for lang in employee_list[employee].values():
      if lang == "English":
        group_langs[ENGLISH] -= 1
      elif lang == "Dutch":
        group_langs[DUTCH] -= 1
      else:
        group_langs[SPANISH] -= 1


  result = []
  backtrack(0, [0, 0, 0], [0, 0, 0], [], [])
  return result
