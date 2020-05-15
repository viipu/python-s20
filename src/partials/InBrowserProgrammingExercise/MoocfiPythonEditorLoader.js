import React from "react"
import styled from "styled-components"
import LoginStateContext from "../../contexes/LoginStateContext"
import LoginControls from "../../components/LoginControls"
import { withTranslation } from "react-i18next"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../../util/strings"
import Quiz from "moocfi-quizzes"
import { Paper } from "@material-ui/core"
import { accessToken } from "../../services/moocfi"
import CourseSettings from "../../../course-settings"
import { ProgrammingExercise } from "moocfi-python-editor"

const StyledPaper = styled(Paper)`
  margin: 2rem 0 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 40px -12px !important;
  border-radius: 1rem !important;
`

class InBrowserProgrammingExercisePartial extends React.Component {
  static contextType = LoginStateContext

  render() {
    const { id, t } = this.props

    // if (!id) {
    //   return <StyledPaper>There should be quiz here but no quiz id is specified.</StyledPaper>
    // }
    return (
      <StyledPaper id={normalizeExerciseId(`quiz-${id}`)}>
        <ProgrammingExercise
          organization="test"
          course="python-test"
          exercise="osa01-01_hymio"
          token=""
        />
      </StyledPaper>
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(InBrowserProgrammingExercisePartial),
)
