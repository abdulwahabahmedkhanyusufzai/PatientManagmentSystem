package contracts

import org.springframework.cloud.contract.spec.Contract

Contract.make {
    description "should return all patients"
    request {
        method GET()
        url "/patients"
    }
    response {
        status OK()
        headers {
            contentType applicationJson()
        }
        body([
            [
                id: "123e4567-e89b-12d3-a456-426614174000",
                name: "John Doe",
                email: "john.doe@example.com",
                address: "123 Main St, Springfield",
                dateOfBirth: "1985-06-15",
                registeredDate: "2024-01-10"
            ]
        ])
    }
}
