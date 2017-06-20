/**
 * Created by Yavor on 05-Jun-17.
 */
function sessionModal(session) {
    //create the outer div of the modal

    let id = session._id
    let modalOuter = $("<div></div>").addClass("modal fade").attr("role", "dialog").attr("id", id)
    let modalDialog = $("<div></div>").addClass("modal-dialog")
    let modalContent = $("<div></div>").addClass("modal-content")
    let modalHeader = $("<div></div>").addClass("modal-header")
    let closeButton = $("<button></button>").addClass("close").attr({"type": "button", "data-dismiss":"modal"})
    let heading = $("<h4></h4>").text(session.title)
    let modalBody = $("<div></div>").addClass("modal-body")

    let price = $("<p></p>").text(session.price)
    let duration = $("<p></p>").text(session.duration)

    let maximumCapacity = []
    for(let i=1; i<= session.maximumCapacity; i++){


        maximumCapacity.push($("<div></div>").addClass("session-slots"))
    }

    let peopleAttending = $("<p></p>").text(session.peopleAttending)
    let modalFooter = $("<div></div>").addClass("modal-footer")
    let closeButtonFooter = $("<button></button>").addClass("btn btn-default").attr("data-dismiss","modal").text("Close")

    modalFooter.append(closeButtonFooter)
    modalBody.append(price, duration, maximumCapacity, peopleAttending)
    modalHeader.append(heading, closeButton)
    modalContent.append(modalHeader, modalBody, modalFooter)
    modalDialog.append(modalContent)
    modalOuter.append(modalDialog)

    return modalOuter

}