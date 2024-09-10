class OrchestratedResult {
    constructor(data = null, error = null, message = null) {
        this.data = data;
        this.error = error;
        this.message = message;
    }

    static success(data = null, message = null) {
        return new OrchestratedResult(data, null, message);
    }

    static error(error = null, message = null) {
        return new OrchestratedResult(null, error, message);
    }

    static fromResponse(response) {
        if (response.status === 'success') {
            return OrchestratedResult.success(response.data, response.message);
        } else {
            return OrchestratedResult.error(response.error, response.message);
        }
    }
}


module.exports = OrchestratedResult;