"""
They gave me the below question to solve in 30 mins.

Based on customer research, we know that our guests get confused when they are searching for accommodation and they found multiple hotels with the same name in the same city.



To avoid this, we want to create a tool to identify "confusing" cities: cities with at least 3 hotels with the same name.



Given a list of tuples (hotel_id, hotel_name, city) return a list of all "confusing" cities.



Input: [
{hotel_1234, "Sheraton", "Amsterdam"} ,
{hotel_1000, "Sheraton", "Buenos Aires"} ,
{hotel_1001, "Hilton", "Amsterdam"} ,
{hotel_1002, "Royal Palace", "Bogota"} ,
{hotel_1003, "Hilton", "Amsterdam"} ,
{hotel_1004, "Sheraton", "Buenos Aires"} ,
{hotel_1005, "Sheraton", "Buenos Aires"}
]

Output: [ "Buenos Aires" ]
"""

from collections import defaultdict


def confuse():


  hotels = [("hotel_1234", "Sheraton", "Amsterdam"), ("hotel_1000", "Sheraton", "Buenos Aires"), ("hotel_1001", "Hilton", "Amsterdam"), ("hotel_1002", "Royal Palace", "Bogota"),
          ("hotel_1003", "Hilton", "Amsterdam"), ("hotel_1004", "Sheraton", "Buenos Aires"), ("hotel_1005", "Sheraton", "Buenos Aires"), ("hotel_1234", "Sheraton", "Amsterdam")]

  d = defaultdict(int)
  for hotel in hotels:
    d[(hotel[1], hotel[2])] += 1

  for k, v in d.items():
    if v >= 3:
      print(k)
