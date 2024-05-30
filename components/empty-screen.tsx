import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to the Kitapyurdu AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This AI chatbot is your personal assistant for finding books, built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>
          and{' '}
          <ExternalLink href="https://spring.io/projects/spring-ai">
            Spring AI
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          Using advanced AI technology, it can recommend books, help you locate specific titles,
          and provide information about various genres and authors.
        </p>
        <p className="leading-normal text-muted-foreground">
          Whether you’re looking for a new mystery novel, a classic piece of literature, or the latest bestseller,
          our AI chatbot is here to assist you in finding the perfect book.
        </p>
      </div>
    </div>
  )
}
