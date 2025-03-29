# PerfectDictionary Web
Simple web application that works as Dictionary. you can use this to get the explanation of any word you want to know its meaning in English. 

## How It works
This Application has a search bar where the user enter an English word the he/she wants to know its meaning and then it provides a simple definition of that word.

## API used
`https://api.dictionaryapi.dev/api/v2/entries/en/${word}` from free dictionary API. 

## Technologies used

- HTMl
- CSS
- Javascript
- REST APIs to fetch data

# GET start with it
 ## 1. clone the repository
   ```bash
   git clone https://github.com/henryparfait/PerfectDictionary.git
   ```
  ## 2. Navigate to the project directory:
   ```bash
   cd Dictionary_Web
   ```
  ## 3. open the index.html file in your browser 
     you see the form with search bar
  - enter the word you want to know its definition in the search bar
  - press the Search button to see the definition of the word you search for

# credit

free dictionary API from https://dictionaryapi.dev/

## Deployment

-The loadbalancer configuration
```bash
# Frontend: Listen for incoming traffic on port 80
frontend http_front
    bind *:80                      
    default_backend http_back

backend http_back
    balance roundrobin              
    server web01 44.201.240.217:80 check  
    server web02 18.212.168.67:80 check  
```

