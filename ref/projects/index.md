# Projects Reference

## Twitter - The algorithm

Twitter's Recommendation Algorithm is a set of services and jobs that are responsible for serving feeds of Tweets and other content across all Twitter product surfaces (e.g. For You Timeline, Search, Explore, Notifications).

[GitHub](https://github.com/twitter/the-algorithm/) / [Blog](https://blog.twitter.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm)

### Features

The major feature groups which are input to the Twitter Heavy Ranking model.

[GitHub](https://github.com/twitter/the-algorithm-ml/blob/main/projects/home/recap/FEATURES.md)

### Heavy Ranker

The heavy ranker is a machine learning model used to rank tweets for the "For You" timeline which have passed through the candidate retrieval stage. It is one of the final stages of the funnel, succeeded primarily by a set of filtering heuristics.

[GitHub](https://github.com/twitter/the-algorithm-ml/tree/main/projects/home/recap)

## Gorse

Gorse is an open-source recommendation system written in Go. Gorse aims to be a universal open-source recommender system that can be easily introduced into a wide variety of online services. By importing items, users and interaction data into Gorse, the system will automatically train models to generate recommendations for each user.

::: info ALGORITHMS
1. UserCF
2. ItemCF
3. Clustering Index
4. Matrix Factorization
5. FM
:::

[GitHub](https://github.com/twitter/GraphJet) / [Website](https://gorse.io/) / [Algorithms]((https://gorse.io/docs/master/concepts/algorithms.html))
