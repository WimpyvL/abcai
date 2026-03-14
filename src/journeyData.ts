import type { AdaptiveJourney, JourneyPage, JourneyPageKey, JourneyProfile, JourneyProfileId, JourneyStage } from './types';

const pages = (items: Record<JourneyPageKey, JourneyPage>) => items;

export const JOURNEY_PROFILES: JourneyProfile[] = [
  {
    id: 'beginner',
    title: 'Beginner path',
    summary: 'Start with understanding, safe first wins, and enough confidence to use AI properly.',
    intent: 'Reduce overwhelm, learn what matters, and build useful habits before you go deeper.',
  },
  {
    id: 'business',
    title: 'Business path',
    summary: 'Focus on ROI, workflow improvement, team adoption, and less wasted spend.',
    intent: 'Move from curiosity into operational value with cleaner priorities and saner decisions.',
  },
  {
    id: 'builder',
    title: 'Builder path',
    summary: 'For technical users building workflows, systems, and implementation layers with intent.',
    intent: 'Turn capability into implementation without drifting into hype, sprawl, or fake complexity.',
  },
];

export const DEFAULT_JOURNEY_PROFILE: JourneyProfileId = 'beginner';

const beginnerStages: JourneyStage[] = [
  { id: 'discover', title: 'Discover', path: '/', description: 'Find your footing and stop the noise early.' },
  { id: 'learn', title: 'Learn', path: '/learn', description: 'Build a grounded understanding first.' },
  { id: 'prompts', title: 'Prompt', path: '/prompts', description: 'Turn clarity into better instructions.' },
  { id: 'choose', title: 'Choose', path: '/choose', description: 'Pick simple tools that fit the task.' },
  { id: 'use', title: 'Use', path: '/use', description: 'Apply AI in daily work without overtrusting it.' },
  { id: 'readiness', title: 'Readiness', path: '/readiness-test', description: 'Check if you are ready for bigger moves.' },
  { id: 'training', title: 'Activate', path: '/training', description: 'Get support once solo exploration is not enough.' },
  { id: 'build', title: 'Build', path: '/build', description: 'Move into technical implementation later.' },
];

const businessStages: JourneyStage[] = [
  { id: 'discover', title: 'Discover', path: '/', description: 'Start with value, not tool hype.' },
  { id: 'use', title: 'Use', path: '/use', description: 'Find repeated work and obvious wins.' },
  { id: 'choose', title: 'Choose', path: '/choose', description: 'Pick tools by job, team, and budget.' },
  { id: 'prompts', title: 'Prompt', path: '/prompts', description: 'Standardize how the team uses AI.' },
  { id: 'readiness', title: 'Readiness', path: '/readiness-test', description: 'Check whether the business is ready to roll out.' },
  { id: 'training', title: 'Activate', path: '/training', description: 'Bring in support when the work gets real.' },
  { id: 'learn', title: 'Learn', path: '/learn', description: 'Use this when the team still needs clearer basics.' },
  { id: 'build', title: 'Build', path: '/build', description: 'Only build once the workflow and ROI case are real.' },
];

const builderStages: JourneyStage[] = [
  { id: 'discover', title: 'Discover', path: '/', description: 'Find the narrow use case worth building.' },
  { id: 'build', title: 'Build', path: '/build', description: 'Start with scope, boundaries, and patterns.' },
  { id: 'choose', title: 'Choose', path: '/choose', description: 'Pick the stack that fits the workflow.' },
  { id: 'prompts', title: 'Prompt', path: '/prompts', description: 'Treat prompt logic like part of the architecture.' },
  { id: 'use', title: 'Use', path: '/use', description: 'Map the system back to operational reality.' },
  { id: 'readiness', title: 'Readiness', path: '/readiness-test', description: 'Check whether the surrounding system is ready.' },
  { id: 'training', title: 'Activate', path: '/training', description: 'Use support when the challenge is bigger than code.' },
  { id: 'learn', title: 'Learn', path: '/learn', description: 'Return here if the foundations are still weak.' },
];

export const ADAPTIVE_JOURNEYS: Record<JourneyProfileId, AdaptiveJourney> = {
  beginner: {
    profile: JOURNEY_PROFILES[0],
    stages: beginnerStages,
    pages: pages({
      home: {
        stageId: 'discover',
        summary: 'Start by understanding what AI is useful for, then learn the basics before spending money or making big claims.',
        nextLabel: 'Begin with Learn',
        nextPath: '/learn',
        recommendations: [
          { title: 'Learn AI clearly', path: '/learn', reason: 'Best if the jargon is still louder than the value.', outcome: 'You will understand the basics without getting buried in hype.' },
          { title: 'Try structured prompts', path: '/prompts', reason: 'Useful once you want your first practical wins.', outcome: 'You will see how better instructions produce better output.' },
          { title: 'Choose a simple starter tool', path: '/choose', reason: 'Good once you know what job you want help with.', outcome: 'You will avoid tool confusion and wasted subscriptions.' },
        ],
      },
      learn: {
        stageId: 'learn',
        summary: 'Clear the fog first, then move into prompts, tools, and safe practical use.',
        nextLabel: 'Practice with prompts',
        nextPath: '/prompts',
        recommendations: [
          { title: 'Browse the prompt library', path: '/prompts', reason: 'The fastest way to turn concepts into usable output.', outcome: 'You will leave with prompts you can adapt today.' },
          { title: 'Compare beginner-friendly tools', path: '/choose', reason: 'Tool choice is easier once the basics make sense.', outcome: 'You will know which tools are worth trying first.' },
          { title: 'See practical uses', path: '/use', reason: 'Good when you want to connect concepts to real work.', outcome: 'You will understand where AI actually helps.' },
        ],
      },
      courses: {
        stageId: 'learn',
        summary: 'Courses give the beginner path more structure, repetition, and guided practice than browsing alone.',
        nextLabel: 'Start with Learn',
        nextPath: '/learn',
        recommendations: [
          { title: 'Reinforce the basics', path: '/learn', reason: 'Use this if you want the plain-language foundation before choosing a course.', outcome: 'You will understand the landscape before committing to a track.' },
          { title: 'Practice with prompts', path: '/prompts', reason: 'The fastest gains still come from applying what you learn directly.', outcome: 'You will turn course learning into usable output faster.' },
          { title: 'Choose a starter tool', path: '/choose', reason: 'Once the course path is clearer, tool choice gets easier.', outcome: 'You will avoid buying software too early or for the wrong job.' },
        ],
      },
      use: {
        stageId: 'use',
        summary: 'Use AI for real tasks without trusting it blindly or turning simple work into a science project.',
        nextLabel: 'Check your readiness',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Take the readiness test', path: '/readiness-test', reason: 'Useful when curiosity is turning into a bigger commitment.', outcome: 'You will know whether to keep learning, pilot, or get help.' },
          { title: 'Tighten your tool choice', path: '/choose', reason: 'Better use usually comes from cleaner tool fit.', outcome: 'You will avoid using the wrong product for the wrong task.' },
          { title: 'Get guided support', path: '/training', reason: 'Useful if you want structured help instead of random trial and error.', outcome: 'You will get a clearer next step.' },
        ],
      },
      choose: {
        stageId: 'choose',
        summary: 'The right tool should make learning and daily use easier, not add another layer of confusion.',
        nextLabel: 'Move into Use',
        nextPath: '/use',
        recommendations: [
          { title: 'Use AI in real workflows', path: '/use', reason: 'Tool choice only matters if it improves actual work.', outcome: 'You will connect tool decisions to real tasks.' },
          { title: 'Take the readiness test', path: '/readiness-test', reason: 'Good if you want to know how far to push adoption.', outcome: 'You will get a practical score and next steps.' },
          { title: 'Keep improving your prompts', path: '/prompts', reason: 'Even good tools underperform with weak instructions.', outcome: 'You will get more usable results from what you pick.' },
        ],
      },
      build: {
        stageId: 'build',
        summary: 'This is the advanced branch for later, once the fundamentals and the real use case are already solid.',
        nextLabel: 'Check readiness first',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Check readiness before building', path: '/readiness-test', reason: 'You should know whether the workflow is actually ready for implementation.', outcome: 'You will reduce the risk of building nonsense.' },
          { title: 'Return to practical use', path: '/use', reason: 'Useful if the build idea is still fuzzier than the workflow.', outcome: 'You will sharpen the use case before coding anything.' },
          { title: 'Get implementation guidance', path: '/training', reason: 'Good when the technical jump feels bigger than your current model.', outcome: 'You will scope a more credible next move.' },
        ],
      },
      prompts: {
        stageId: 'prompts',
        summary: 'Prompts are the bridge between understanding AI and using it well enough to trust your process.',
        nextLabel: 'Choose your tools',
        nextPath: '/choose',
        recommendations: [
          { title: 'Choose tools with confidence', path: '/choose', reason: 'Now that you know how to brief the model, tool choice becomes more practical.', outcome: 'You will make cleaner buying and usage decisions.' },
          { title: 'Apply prompts in real work', path: '/use', reason: 'Useful if you want to see where these prompt patterns belong.', outcome: 'You will connect prompts to actual tasks and outcomes.' },
          { title: 'Check your readiness', path: '/readiness-test', reason: 'Good once prompting is becoming habit instead of experimentation.', outcome: 'You will know what needs to happen next.' },
        ],
      },
      readiness: {
        stageId: 'readiness',
        summary: 'This tells you whether the next move is more learning, better habits, or structured support.',
        nextLabel: 'Explore training and support',
        nextPath: '/training',
        recommendations: [
          { title: 'See training and consulting', path: '/training', reason: 'Useful when you want help turning readiness into progress.', outcome: 'You will see what supported adoption could look like.' },
          { title: 'Return to Learn', path: '/learn', reason: 'Good if the result shows you still need stronger basics.', outcome: 'You will rebuild confidence from the right foundation.' },
          { title: 'Keep practicing prompts', path: '/prompts', reason: 'Often the best next move is more hands-on repetition.', outcome: 'You will improve day-to-day usage before scaling further.' },
        ],
      },
      training: {
        stageId: 'training',
        summary: 'This is where guided help enters the picture once you want more than solo exploration.',
        nextLabel: 'Revisit your readiness',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Re-check your readiness', path: '/readiness-test', reason: 'Useful before committing to a bigger next step.', outcome: 'You will enter the conversation with better context.' },
          { title: 'Return to practical use', path: '/use', reason: 'Good if you want clearer workflow examples first.', outcome: 'You will define what help you actually need.' },
          { title: 'Strengthen your prompting', path: '/prompts', reason: 'Useful if you want immediate gains while you plan the next move.', outcome: 'You will leave with something practical today.' },
        ],
      },
    }),
  },
  business: {
    profile: JOURNEY_PROFILES[1],
    stages: businessStages,
    pages: pages({
      home: {
        stageId: 'discover',
        summary: 'Start by spotting where AI can save time, improve output, or reduce admin before you buy anything new.',
        nextLabel: 'See business use cases',
        nextPath: '/use',
        recommendations: [
          { title: 'Explore practical use cases', path: '/use', reason: 'The right starting point is workflow value, not tool hype.', outcome: 'You will see where AI can improve actual operations.' },
          { title: 'Choose tools by job', path: '/choose', reason: 'Useful when the team needs cleaner buying decisions.', outcome: 'You will reduce overlap, waste, and random subscriptions.' },
          { title: 'Take the readiness test', path: '/readiness-test', reason: 'Best when you want a quick signal on how ready the business really is.', outcome: 'You will get a more grounded next move.' },
        ],
      },
      learn: {
        stageId: 'learn',
        summary: 'This becomes the support layer when the team needs shared understanding before broader rollout.',
        nextLabel: 'Move into Use',
        nextPath: '/use',
        recommendations: [
          { title: 'Return to use cases', path: '/use', reason: 'Learning should support implementation, not delay it forever.', outcome: 'You will bring clarity back into the workflow discussion.' },
          { title: 'Standardize with prompts', path: '/prompts', reason: 'Useful when you want the team to apply learning consistently.', outcome: 'You will make day-to-day usage easier to repeat.' },
          { title: 'Assess readiness', path: '/readiness-test', reason: 'Good when you want to know whether the team is ready for more.', outcome: 'You will see if the next move is training, pilot work, or pause.' },
        ],
      },
      courses: {
        stageId: 'learn',
        summary: 'Courses are the structured layer for teams and operators who need deeper skill-building before or during rollout.',
        nextLabel: 'Move into Use',
        nextPath: '/use',
        recommendations: [
          { title: 'Return to workflow use cases', path: '/use', reason: 'Course selection should still stay tied to actual business problems.', outcome: 'You will keep learning connected to operational value.' },
          { title: 'Assess readiness', path: '/readiness-test', reason: 'Useful when the question is whether the business can absorb broader rollout.', outcome: 'You will see if the next move is training, pilots, or implementation support.' },
          { title: 'Book course or cohort support', path: '/training', reason: 'Best when you want structured delivery for a team rather than a solo track.', outcome: 'You will turn interest into a realistic training plan.' },
        ],
      },
      use: {
        stageId: 'use',
        summary: 'This path starts with repeated work, obvious inefficiencies, and measurable operational wins.',
        nextLabel: 'Choose the right tools',
        nextPath: '/choose',
        recommendations: [
          { title: 'Compare business-fit tools', path: '/choose', reason: 'Once the workflow is clear, tool selection gets honest fast.', outcome: 'You will choose tools by fit, budget, and team context.' },
          { title: 'Build a prompt layer', path: '/prompts', reason: 'Useful when your team needs better consistency from the tools.', outcome: 'You will improve quality and reduce prompt drift.' },
          { title: 'Check readiness for rollout', path: '/readiness-test', reason: 'Good before you expand from interest into adoption.', outcome: 'You will know whether to pilot, train, or hold back.' },
        ],
      },
      choose: {
        stageId: 'choose',
        summary: 'The wrong stack creates cost, confusion, and false confidence. Tool choice has to stay close to the work.',
        nextLabel: 'Standardize with prompts',
        nextPath: '/prompts',
        recommendations: [
          { title: 'Browse prompt packs', path: '/prompts', reason: 'Teams need a repeatable way to get value from the tools they pick.', outcome: 'You will standardize how the team uses AI.' },
          { title: 'Return to workflow use cases', path: '/use', reason: 'Useful if the tool debate is getting ahead of the work.', outcome: 'You will refocus on actual business value.' },
          { title: 'Get help choosing a stack', path: '/training', reason: 'Best when multiple teams, budgets, or processes are involved.', outcome: 'You will make a cleaner implementation decision.' },
        ],
      },
      build: {
        stageId: 'build',
        summary: 'The business path becomes technical only once the workflow, owner, and ROI case are obvious.',
        nextLabel: 'Assess implementation readiness',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Check rollout readiness', path: '/readiness-test', reason: 'You need operational discipline before broader implementation.', outcome: 'You will know whether to scale carefully or slow down.' },
          { title: 'Bring in implementation support', path: '/training', reason: 'Useful when the build path is strategically important.', outcome: 'You will scope the technical move more credibly.' },
          { title: 'Return to tool and workflow fit', path: '/choose', reason: 'If the stack is still fuzzy, the build is early.', outcome: 'You will reduce technical drift before it becomes expensive.' },
        ],
      },
      prompts: {
        stageId: 'prompts',
        summary: 'Prompt discipline is what turns a loose team experiment into something the business can actually scale.',
        nextLabel: 'Take the readiness test',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Test business readiness', path: '/readiness-test', reason: 'Useful once the team is using prompts often enough to think about rollout.', outcome: 'You will know what the business needs next.' },
          { title: 'Apply prompts in workflow examples', path: '/use', reason: 'Good when you want tighter links between prompts and operations.', outcome: 'You will see where prompt systems belong in real work.' },
          { title: 'Turn prompts into team training', path: '/training', reason: 'Best when you want shared usage standards.', outcome: 'You will move toward repeatable adoption.' },
        ],
      },
      readiness: {
        stageId: 'readiness',
        summary: 'This is the decision gate between pilot work, training, and more serious implementation.',
        nextLabel: 'See training and consulting',
        nextPath: '/training',
        recommendations: [
          { title: 'Book training or a review', path: '/training', reason: 'Use this when the business needs structured help to move forward.', outcome: 'You will turn diagnosis into a practical plan.' },
          { title: 'Return to workflow use cases', path: '/use', reason: 'Useful if the score shows you still need better operational clarity.', outcome: 'You will define lower-risk opportunities first.' },
          { title: 'Tighten prompt standards', path: '/prompts', reason: 'Useful when the team needs stronger day-to-day practice before scaling.', outcome: 'You will improve quality and consistency.' },
        ],
      },
      training: {
        stageId: 'training',
        summary: 'This is where the business path turns from browsing into an actual rollout conversation.',
        nextLabel: 'Revisit the readiness test',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Recheck readiness', path: '/readiness-test', reason: 'Useful if you want better context before the engagement starts.', outcome: 'You will frame the next step more clearly.' },
          { title: 'Return to use cases', path: '/use', reason: 'Good if the workflow needs sharper definition first.', outcome: 'You will enter the conversation with a better problem statement.' },
          { title: 'Build team prompt packs', path: '/prompts', reason: 'Useful if you want immediate wins while planning bigger support.', outcome: 'You will create usable assets for the team.' },
        ],
      },
    }),
  },
  builder: {
    profile: JOURNEY_PROFILES[2],
    stages: builderStages,
    pages: pages({
      home: {
        stageId: 'discover',
        summary: 'Start by choosing a narrow build target with real value, not a vague assistant fantasy.',
        nextLabel: 'Go to Build',
        nextPath: '/build',
        recommendations: [
          { title: 'Explore build paths', path: '/build', reason: 'Best if you are ready to move from prompting into systems and workflows.', outcome: 'You will see grounded implementation paths instead of vague agent talk.' },
          { title: 'Choose the right stack', path: '/choose', reason: 'Useful when the use case is clearer than the tooling.', outcome: 'You will reduce accidental technical complexity.' },
          { title: 'Standardize prompts early', path: '/prompts', reason: 'Prompt drift becomes technical debt fast.', outcome: 'You will create cleaner foundations for implementation.' },
        ],
      },
      learn: {
        stageId: 'learn',
        summary: 'Use this as the support layer when the team or product context still needs clearer shared understanding.',
        nextLabel: 'Return to Build',
        nextPath: '/build',
        recommendations: [
          { title: 'Return to build patterns', path: '/build', reason: 'Learning should support implementation, not replace it.', outcome: 'You will reconnect fundamentals to the build.' },
          { title: 'Reassess the use case', path: '/use', reason: 'Useful if the tech is racing ahead of the operational problem.', outcome: 'You will ground the system in actual workflow needs.' },
          { title: 'Check readiness', path: '/readiness-test', reason: 'Good when the blockers are organizational rather than technical.', outcome: 'You will know what needs to change around the build.' },
        ],
      },
      courses: {
        stageId: 'build',
        summary: 'Builder courses work best when the goal is structured implementation discipline, not generic AI enthusiasm.',
        nextLabel: 'Return to Build',
        nextPath: '/build',
        recommendations: [
          { title: 'Return to build patterns', path: '/build', reason: 'Use this when the course needs to feed directly into a real system decision.', outcome: 'You will turn the learning back into architecture and scope.' },
          { title: 'Choose the right stack', path: '/choose', reason: 'Builder learning still needs stack choices grounded in reality.', outcome: 'You will keep the technical path cleaner and more maintainable.' },
          { title: 'Bring in implementation support', path: '/training', reason: 'Useful when the build is strategically important and the team wants review or delivery help.', outcome: 'You will reduce technical drift before it hardens.' },
        ],
      },
      use: {
        stageId: 'use',
        summary: 'A builder path still has to land in real operations. If the workflow does not improve, the system is theatre.',
        nextLabel: 'Check rollout readiness',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Take the readiness test', path: '/readiness-test', reason: 'Useful before scaling beyond one technical pilot.', outcome: 'You will see whether the surrounding system is ready.' },
          { title: 'Refine the stack choice', path: '/choose', reason: 'Operational friction often reveals a tool mismatch.', outcome: 'You will make the implementation cleaner and more maintainable.' },
          { title: 'Get implementation support', path: '/training', reason: 'Useful when the technical path needs stronger organizational alignment.', outcome: 'You will reduce rollout drift.' },
        ],
      },
      choose: {
        stageId: 'choose',
        summary: 'Stack choice should follow the workflow, data boundaries, and evaluation needs, not internet fashion.',
        nextLabel: 'Standardize prompts',
        nextPath: '/prompts',
        recommendations: [
          { title: 'Build prompt standards', path: '/prompts', reason: 'Prompt logic should be intentional before it spreads through the system.', outcome: 'You will make your implementation more consistent and testable.' },
          { title: 'Return to build architecture', path: '/build', reason: 'Useful when the tool decision is changing the implementation shape.', outcome: 'You will keep the system design coherent.' },
          { title: 'Map back to use cases', path: '/use', reason: 'Good if the stack debate is drifting away from value delivery.', outcome: 'You will reconnect technical decisions to workflow outcomes.' },
        ],
      },
      build: {
        stageId: 'build',
        summary: 'Ship narrow, useful systems with explicit boundaries, real evaluation, and much less fantasy.',
        nextLabel: 'Choose the right stack',
        nextPath: '/choose',
        recommendations: [
          { title: 'Choose tooling and stack', path: '/choose', reason: 'Once the build target is clear, stack selection should get deliberate.', outcome: 'You will reduce overbuild risk and tool sprawl.' },
          { title: 'Define prompt standards', path: '/prompts', reason: 'Prompt logic deserves first-class treatment, not hidden glue.', outcome: 'You will improve consistency and debuggability.' },
          { title: 'Map to business use', path: '/use', reason: 'The system still needs to survive contact with actual work.', outcome: 'You will pressure-test whether the build matters.' },
        ],
      },
      prompts: {
        stageId: 'prompts',
        summary: 'Prompt systems are part of the architecture. Treat them like operational logic, not disposable text.',
        nextLabel: 'Map the workflow impact',
        nextPath: '/use',
        recommendations: [
          { title: 'Connect prompts to workflows', path: '/use', reason: 'Prompt quality only matters if it improves a real process.', outcome: 'You will tie model behavior back to operational outcomes.' },
          { title: 'Check readiness to scale', path: '/readiness-test', reason: 'Useful before the pilot becomes broader rollout.', outcome: 'You will know if the surrounding system can support it.' },
          { title: 'Refine your stack', path: '/choose', reason: 'Sometimes prompt problems are really tooling problems upstream.', outcome: 'You will make better technical decisions earlier.' },
        ],
      },
      readiness: {
        stageId: 'readiness',
        summary: 'This checks whether the build is supported by the team, the workflow, and the operating environment around it.',
        nextLabel: 'Bring in implementation support',
        nextPath: '/training',
        recommendations: [
          { title: 'See implementation support', path: '/training', reason: 'Useful when the limiting factor is alignment, rollout, or design review.', outcome: 'You will get a stronger path from prototype to credible implementation.' },
          { title: 'Return to workflow use', path: '/use', reason: 'Good if the readiness score shows operational weakness rather than code weakness.', outcome: 'You will fix the real constraint first.' },
          { title: 'Revisit build scope', path: '/build', reason: 'Useful when the readiness gap means the current build is too ambitious.', outcome: 'You will narrow the system into something more survivable.' },
        ],
      },
      training: {
        stageId: 'training',
        summary: 'This is where the builder path gets outside help to tighten architecture, rollout, or implementation choices.',
        nextLabel: 'Recheck rollout readiness',
        nextPath: '/readiness-test',
        recommendations: [
          { title: 'Run the readiness test again', path: '/readiness-test', reason: 'Useful if you want clearer context before asking for help.', outcome: 'You will frame the implementation conversation better.' },
          { title: 'Return to build patterns', path: '/build', reason: 'Good if the technical shape still needs work first.', outcome: 'You will sharpen scope and system boundaries.' },
          { title: 'Reconnect to workflow reality', path: '/use', reason: 'Useful if the system needs stronger product grounding.', outcome: 'You will keep the implementation anchored to value.' },
        ],
      },
    }),
  },
};
