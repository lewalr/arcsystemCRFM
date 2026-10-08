# ARC / CRFM — Continuous Reference-Frame Manifold

**Repository:** `lewalr/arcsystemCRFM`  
**Project:** ARC — CRFM spatial environment and reference-frame experiments

## Purpose and continuity

CRFM is an interactive 3D environment for exploring how an observer's position, orientation, and motion change the *view* of a scene while its world-space landmarks retain their identities and positions. It is an implementation and diagnostic instrument within the ongoing ARC work, not a completed proof of a four-dimensional physical model.

The broader ARC exploration motivates CRFM: a continuous traversal through changing reference frames, with a central axis, pyramid/obelisk geometry, and a consistent observer. The visual goal is continuity rather than separate scene panels or duplicated objects. The current browser prototype tests a narrower, measurable foundation: stationary world geometry, camera movement, coordinate conventions, trajectories, and projections.

### Stable reference objects

The environment contains a central cube and vertical golden axis, a pyramid and an obelisk, a ground grid, and surrounding visual field. Camera movement should not move the reference objects. The golden motion trail is recorded in world coordinates, rather than attached to the observer.

**Distinguish:** an invariant world transform is a code-level property; correct visual perspective and perception require separate tests. Neither a passing diagnostic nor a single screenshot proves the full ARC composition goal.

## Version and deployment workflow

| Location | Role | Status |
| --- | --- | --- |
| [Production site](https://lewalr.github.io/arcsystemCRFM/) | Current root application, CRFM 0.2 | Existing working baseline |
| [`crfm-0.3` branch](https://github.com/lewalr/arcsystemCRFM/tree/crfm-0.3) | Development source for the CRFM 0.3 candidate | Under review; not approved for production |
| [0.3 preview](https://lewalr.github.io/arcsystemCRFM/preview/) | Safari/browser test copy, served from `main/preview/index.html` | Candidate, subject to Pages publication and browser verification |
| [0.3 diagnostic preview](https://lewalr.github.io/arcsystemCRFM/preview/?autoTest=true) | Runs the candidate's automated checks | Results not yet verified in Safari |

**Important:** The preview is a manually published copy, not an automatically synchronized deployment of the development branch. Changes to `crfm-0.3/index.html` do **not** update `main/preview/index.html` until copied over. Updating the preview must not replace `main/index.html`.

### Release sequence

1. Develop and review on `crfm-0.3`.
2. Publish a selected candidate to `main/preview/index.html` without altering the production root.
3. Test the preview in Safari and other target browsers, using `?autoTest=true` and hands-on observation.
4. Review failures and limitations; iterate in the development branch and republish the preview as needed.
5. Update production only after explicit approval and successful validation.

## Continuity ledger

- **CRFM 0.2:** Three.js browser scene with fixed landmarks, observer navigation, presets, orbit, minimap, motion trail, and an initial six-direction diagnostic. A reported run completed six movement checks and reported no landmark-matrix deviations. That establishes the behavior measured by that run, **not** a comprehensive rendering or interface validation.
- **0.2 review:** Identified gaps in keyboard-event fidelity, trail segmentation across teleports, minimap geometry, coordinate consistency, and the scope of the original invariant checks.
- **CRFM 0.3 candidate:** Introduces physical-key handling, segmented world-space trail, retained-versus-total sample accounting, a shared minimap projection, unified displayed coordinates, and diagnostic groups for world invariants, observer/trajectory, and projection/interface.
- **Current verification boundary:** The 0.3 candidate was supplied with a JavaScript syntax-check claim, but **no completed Safari/browser diagnostic report has been accepted yet**. A passing syntax check does not verify runtime behavior.
- **Open validation work:** Confirm trail-snapshot comparisons (especially when new samples are appended and when the retention cap is reached), actual canvas-pixel checks, return-to-origin behavior, projection assumptions, touch controls, drag-look, WebGL rendering, and browser loading/error behavior.

## Technical notes

- The application is a standalone `index.html` using Three.js loaded as an ES module from `https://esm.sh/three@0.171.0`.
- Its internal Three.js axes are X right, Y up, and negative Z forward from the initial front viewpoint. The 0.3 display convention is **X right, Y forward (= negative Three.js Z), Z up (= Three.js Y)**.
- The trail retains at most 2,400 recent samples. Retained samples and cumulative travel are distinct measurements; preset jumps are accounted for separately in 0.3.
- `WORLD FIXED` is currently a UI label, not a live indicator of test status.
- If the module CDN fails to load, the loading notice may remain visible without a useful error.
- The 0.3 automated test does **not** certify rendered WebGL pixels, touch-button interactions, or drag-look.

## Review and reporting

For a 0.3 test, open the [diagnostic preview](https://lewalr.github.io/arcsystemCRFM/preview/?autoTest=true), let it finish, use **Copy Report**, and preserve the full PASS/FAIL lines alongside visual observations. Record browser/device, date, and candidate commit when possible. A FAIL can indicate either an implementation defect or an invalid test assumption; investigate before treating the result as conclusive.

## ARC principle

**Continuity is the subject of the experiment.** Keep the observer's movement, the world's geometry, and the rendered projection conceptually separate; measure each claim at the level the available test can actually support. Preserve the prior working version until the next one is reviewed and approved.

## Branch-specific status — `main`

The repository root `index.html` is the **CRFM 0.2 production baseline**. Do not replace it with the 0.3 candidate until the release is explicitly approved. The `preview/index.html` file on this branch is a separate test copy of 0.3; it does not change the root application. This README records the shared ARC/CRFM history and links to the development branch.
