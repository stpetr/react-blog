import { Component, ErrorInfo, ReactNode, Suspense } from 'react'

import { AppLoader } from 'shared/ui/app-loader'

type ErrorBoundaryProps = {
  children: ReactNode
  fallback: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn(error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback={<AppLoader />}>
          {this.props.fallback}
        </Suspense>
      )
    }

    return this.props.children
  }
}
