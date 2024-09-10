def call(TARGET_ENV) {
  sh '''
    TARGET_ENV=${TARGET_ENV}
    POLICIES_DIR="./apiproxy/policies"

    # Define a regular expression to match AWS signature policies
    AWS_POLICIES_PATTERN="fc\.signature4-aws-(.*)\.xml"

    REQUIRED_POLICIES="am.add-header.cors.xml am.variable.error-not-found-backend.xml am.variable.error-not-found.xml cache.responsecache.xml fc.fault-rules.xml fc.security.xml raise-fault.go-to-fault-rules.xml"
    RECOMMENDED_POLICIES="am.set-payload.health_check_proxy.xml"

    # Use `find` with the regular expression to dynamically discover AWS policies
    AWS_POLICIES = find files: "${POLICIES_DIR}/${AWS_POLICIES_PATTERN}"

    # Combine required, recommended, and discovered policies into a single string
    ALL_POLICIES = "${REQUIRED_POLICIES} ${RECOMMENDED_POLICIES} ${AWS_POLICIES}"

    # Perform actions using ALL_POLICIES as needed (e.g., copying, processing)
    echo "All policies to consider: ${ALL_POLICIES}"

    # (Optional) Further process or utilize ALL_POLICIES based on your specific requirements
  '''
}