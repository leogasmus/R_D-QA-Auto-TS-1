Feature: Product search and application promotion

    Scenario Outline: User can search for a product
        Given the user opens the homepage
        When the user searches for "<product>"
        Then the page displays a list of products matching "<product>"
        Examples:
            | product |
            | iPhone  |
            | Samsung |
            | AirPods |

    Scenario: Sidebar promotes the mobile app
        Given the user opens the homepage
        When the user opens the sidebar menu
        Then the sidebar displays the app promotion banner
