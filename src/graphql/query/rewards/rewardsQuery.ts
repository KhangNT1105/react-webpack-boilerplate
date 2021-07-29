import { gql } from '@apollo/client'

export const REWARDS_QUERY = gql`
  {
    reward {
      displayText
      name
      eventStartDate
      eventEndDate
      displayStartDate
      displayEndDate
      rewardPointsRequired
      voucherCode
      collectionMethod
      location
      sortPriority
      brand {
        contentItemIds
        contentItems {
          displayText
          contentType
        }
      }
      bannerImage {
        paths
        urls
      }
      mobileImage {
        paths
        urls
      }
      pageContent
      termsAndConditions
      tags
      modifiedUtc
      contentType
      createdUtc
      publishedUtc
    }
  }
`
