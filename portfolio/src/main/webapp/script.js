// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function funFacts() {
  const facts =
      ["I'm a Scorpio born on November 11","I have triplet siblings","I love classical music","I adore Meek Mill", "Pop Smoke is an absolute favorite","You'll hear me before you see me","I love card games","Like all polar bears, I am left-handed","Mulan is my favorite Disney princess","Rent is my favorite musical of all time","Cello Suite 1 in G Major is the cure to my insomnia"];


  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}
